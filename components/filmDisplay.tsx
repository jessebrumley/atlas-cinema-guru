import { auth } from "@/auth";
import { fetchTitles, fetchGenres } from "@/lib/data"
import FilmImage from "./filmImage";

import PageButtons from "./pageButtons";

export default async function FilmDisplay({ page, minYear, maxYear, query, genres }: {
    page: string,
    minYear: string,
    maxYear: string,
    query: string,
    genres: string[]
}) {
    const session = await auth();
    const films = await fetchTitles(parseInt(page), parseInt(minYear), parseInt(maxYear), query, genres, session?.user?.email!!)
    const nextPage = await fetchTitles(parseInt(page) + 1, parseInt(minYear), parseInt(maxYear), query, genres, session?.user?.email!!)
    const nextPageContent = nextPage.length;
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
            {films.map((film) => (
                <FilmImage key={film.id} id={film.id} title={film.title} released={film.released} genre={film.genre} synopsis={film.synopsis} favorited={film.favorited} watchLater={film.watchLater} image={film.image} />
            ))}
            <PageButtons previousPage={parseInt(page) - 1} nextPage={parseInt(page) + 1} nextPageContent={nextPageContent} />
        </div>
    )
}