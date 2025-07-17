export default function GenreTag({ genre }: { genre: string }) {
    return (
        <div className="bg-[#54F4D0] p-2 rounded-4xl absolute left-0 bottom-0 m-2">
            {genre}
        </div>
    )
}