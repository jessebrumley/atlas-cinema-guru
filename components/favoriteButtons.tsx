import { Star, Clock } from "lucide-react"
import { auth } from "@/auth"
import { deleteFavorite, deleteWatchLater, insertFavorite, insertWatchLater } from "@/lib/data";
import { revalidatePath } from "next/cache";

export default async function FavoriteButtons(props: { id: string, favorited: boolean, watchLater: boolean }) {
    const session = await auth();
    if (!session) return null;
    const handleFavorite = async (data: FormData) => {
        "use server";
        const favorited = data.get("favorited");
        const title_id = data.get("id")?.toString()!!;
        if (favorited == "true") {
            console.log("removed from favorites!")
            await deleteFavorite(title_id, session?.user?.email!!);
        } else {
            console.log("added to favorites!")
            await insertFavorite(title_id, session?.user?.email!!);
        }
        revalidatePath('/');
    }
    const handleWatchLater = async (data: FormData) => {
        "use server";
        const watchLater = data.get("watchLater");
        const title_id = data.get("id")?.toString()!!;
        if (watchLater == "true") {
            console.log("Removed from watch later list!")
            await deleteWatchLater(title_id, session?.user?.email!!);
        } else {
            console.log("Added to watch later list!")
            await insertWatchLater(title_id, session?.user?.email!!)
        }
        revalidatePath('/')
    }
    return (
        <div className="absolute hidden group-hover:flex flex-row top-2 right-2">
            <form className="me-2" action={handleFavorite}>
                <input name="favorited" className="hidden" readOnly value={props.favorited.toString()} />
                <input name="id" className="hidden" readOnly value={props.id} />
                <button className="cursor-pointer" type="submit">
                    {props.favorited ? <Star fill="white" stroke="0" /> : <Star />}
                </button>
            </form>
            <form className="me-1" action={handleWatchLater}>
                <input name="watchLater" className="hidden" readOnly value={props.watchLater.toString()} />
                <input name="id" className="hidden" readOnly value={props.id} />
                <button className="cursor-pointer" type="submit">
                    {props.watchLater ? <Clock color="black" fill="white" /> : <Clock />}
                </button>
            </form>
        </div>
    )
}