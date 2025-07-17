import Image from "next/image";
import { UsersTitle } from "@/lib/definitions";
import GenreTag from "./genreTag";
import FavoriteButtons from "./favoriteButtons";
import { auth } from "@/auth";

export default function FilmImage(title: UsersTitle) {
    return (
        <div className="group relative rounded-4xl bg-gradient border-2 border-[#54F4D0] mx-6 my-2">
            <Image className="static rounded-4xl" src={title.image} width={390} height={390} alt="Film Image" />
            <FavoriteButtons favorited={title.favorited} watchLater={title.watchLater} id={title.id} />
            <div className="md:hidden md:group-hover:flex flex flex-col absolute w-full h-40 bottom-0 bg-[#000061] rounded-b-4xl p-3">
                <h1 className="text-2xl">{title.title} ({title.released})</h1>
                <p className="my-2">{title.synopsis}</p>
                <GenreTag genre={title.genre} />
            </div>
        </div>
    )
}