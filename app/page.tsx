import FilmDisplay from "@/components/filmDisplay";
import FilmImage from "@/components/filmImage";
import SearchField from "@/components/searchField";
import { fetchGenres } from "@/lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    page?: string;
    minYear?: string;
    maxYear?: string;
    query?: string;
    genres?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  let genres: string[] = searchParams?.genres?.split(",")!! || await fetchGenres();
  const currentPage = searchParams?.page || "1";
  const minYear = searchParams?.minYear || "0";
  const maxYear = searchParams?.maxYear || String(new Date().getFullYear());
  const query = searchParams?.query || "";
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
      <SearchField />
      <FilmDisplay page={currentPage} minYear={minYear} maxYear={maxYear} query={query} genres={genres} />
    </div>
  );
}
