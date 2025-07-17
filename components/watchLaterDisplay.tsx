import { auth } from "@/auth";
import { fetchTitles, fetchGenres, fetchFavorites, fetchWatchLaters } from "@/lib/data"
import FilmImage from "./filmImage";

import PageButtons from "./pageButtons";

export default async function WatchLatersDisplay({ page }: {
    page: string
}) {
    const session = await auth();
    const films = await fetchWatchLaters(parseInt(page), session?.user?.email!!)
    const nextPageContent = await fetchWatchLaters(parseInt(page) + 1, session?.user?.email!!)
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
            <h1 className="w-full text-center text-6xl font-bold">Watch Later</h1>
            {films.map((film) => (
                <FilmImage key={film.id} id={film.id} title={film.title} released={film.released} genre={film.genre} synopsis={film.synopsis} favorited={film.favorited} watchLater={film.watchLater} image={film.image} />
            ))}
            <PageButtons previousPage={parseInt(page) - 1} nextPage={parseInt(page) + 1} nextPageContent={nextPageContent.length} />
        </div>
    )
}