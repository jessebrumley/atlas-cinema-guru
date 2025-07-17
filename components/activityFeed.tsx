import { auth } from "@/auth";
import { fetchActivities } from "@/lib/data";

export default async function ActivityFeed() {
    const session = await auth();
    if (!session) return null;
    const activityTracker = {};
    const activities = await fetchActivities(1, session.user?.email!!);
    return (
        <div className="hidden md:group-hover:flex flex-col group-hover:w-52 mx-auto rounded-2xl p-2 bg-[#54F4D0] h-full">
            <p className="w-52 font-bold text-[#000061] text-center">
                Latest Activities
            </p>
            {activities.map((activity) => (
                <div key={activity.id} className="flex-wrap my-2">
                    <p className="text-[#000061]">{activity.timestamp.toLocaleString()}</p>
                    {activity.activity === 'FAVORITED' ? <p className="text-[#000061]">Favorited <span className="font-bold">{activity.title}</span></p> : <p className="text-[#000061]">Added <span className="font-bold">{activity.title}</span> to watch later</p>}
                </div>
            ))}
        </div>
    )
}