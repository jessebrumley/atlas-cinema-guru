"use client";

import { Dispatch, SetStateAction } from "react";

export default function GenreButton({ genre, genres, handler }: { genre: string, genres: string[], handler: (arg0: string) => void }) {

    function handleClick() {
        handler(genre)
    }
    if (genres.includes(genre)) {
        return (
            <form action={handleClick}>
                <button type="submit" className="m-1 cursor-pointer rounded-4xl p-2 border bg-[#54F4D0] text-[#000061]">
                    {genre}
                </button>
            </form>
        )
    } else {
        return (
            <form action={handleClick}>
                <button type="submit" className="m-1 cursor-pointer rounded-4xl p-2 border border-[#54F4D0] bg-[#000061]">
                    {genre}
                </button>
            </form>
        )
    }
}