'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import GenreButton from "./genreButton";
import { useState } from "react";

export default function SearchField() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const genres: string[] = params.get('genres')?.split(',') || [];
    function handleSearch(field: string, term: string) {
        if (term) {
            params.set(field, term);
        } else {
            params.delete(field);
        }
        router.replace(`${pathname}?${params.toString()}`);
    }
    function handleGenres(handledGenre: string) {
        console.log(handledGenre)
        if (handledGenre) {
            if (!genres.includes(handledGenre)) {
                genres.push(handledGenre);
            } else {
                genres.splice(genres.indexOf(handledGenre), 1)
            }
            console.log("setting params");
            params.set('genres', genres.toString());
            params.set('page', "1");
            router.replace(`${pathname}?${params.toString()}`);
        }
        if (genres.length == 0 || (genres.length == 1 && genres[0] == '')) {
            console.log("genres empty")
            params.delete('genres');
            params.set('page', "1");
            router.replace(`${pathname}?${params.toString()}`);
        }
    }
    return (
        <div className="flex md:flex-row flex-col w-full ms-4 md:justify-between items-center mb-4">


            <form className="ms:justify-baseline justify-center">
                <div className="flex-col md:justify-baseline justify-center">
                    <label>
                        <p className="m-1 md:text-start text-center">Search</p>
                        <input
                            id="query"
                            type="text"
                            className="w-80 bg-[#000061] rounded-4xl border border-[#54F4D0] py-1 px-3"
                            placeholder="Search Movies..."
                            onChange={(e) => {
                                handleSearch(e.target.id, e.target.value);
                            }}
                        />
                    </label>
                    <div className="flex md:justify-baseline justify-center">
                        <div className="flex-col w-36 mt-3 me-7">
                            <label>
                                <span className="m-1">Min Year</span>
                                <input
                                    id="minYear"
                                    type="text"
                                    className="mt-1 w-36 bg-[#000061] rounded-4xl border border-[#54F4D0] p-1"
                                    onChange={(e) => {
                                        handleSearch(e.target.id, e.target.value);
                                    }} />
                            </label>
                        </div>
                        <div className="flex-col w-36 mt-3">
                            <label>
                                <span className="m-1">Max Year</span>
                                <input
                                    id="maxYear"
                                    type="text"
                                    className="mt-1 w-36 bg-[#000061] rounded-4xl border border-[#54F4D0] p-1"
                                    onChange={(e) => {
                                        handleSearch(e.target.id, e.target.value);
                                    }} />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="flex flex-wrap w-md me-4 mt-2 md:justify-baseline justify-center">
                <GenreButton genre="Romance" genres={genres} handler={handleGenres} />
                <GenreButton genre="Horror" genres={genres} handler={handleGenres} />
                <GenreButton genre="Drama" genres={genres} handler={handleGenres} />
                <GenreButton genre="Action" genres={genres} handler={handleGenres} />
                <GenreButton genre="Mystery" genres={genres} handler={handleGenres} />
                <GenreButton genre="Fantasy" genres={genres} handler={handleGenres} />
                <GenreButton genre="Thriller" genres={genres} handler={handleGenres} />
                <GenreButton genre="Western" genres={genres} handler={handleGenres} />
                <GenreButton genre="Sci-Fi" genres={genres} handler={handleGenres} />
                <GenreButton genre="Adventure" genres={genres} handler={handleGenres} />
            </div>
        </div>
    )
}