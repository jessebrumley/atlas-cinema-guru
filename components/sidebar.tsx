import { fetchActivities } from "@/lib/data"
import { FolderClosed, Star, Clock } from "lucide-react"
import { auth } from "@/auth"
import ActivityFeed from "./activityFeed";

export default async function Sidebar() {

    return (
        <div className="md:sticky md:inset-y-0 flex md:flex-col flex-row md:min-h-screen md:w-18 md:hover:w-64 w-full bg-[#1dd2af] place-self-start group">
            <div className="md:justify-center justify-around md:block flex flex-row md:group-hover:justify-start w-full text-center md:p-0 p-4">
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="/">
                        <FolderClosed fill="white" color="#1dd2af" /> <span className="inline md:hidden md:group-hover:inline">Home</span>
                    </a>
                </div>
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="/favorites">
                        <Star fill="white" /> <span className="inline md:hidden md:group-hover:inline">Favorites</span>
                    </a>
                </div>
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="/watch-later">
                        <Clock fill="white" color="#1dd2af" /> <span className="inline md:hidden md:group-hover:inline">Watch Later</span>
                    </a>
                </div>
            </div>
            <ActivityFeed />
        </div>
    )
}