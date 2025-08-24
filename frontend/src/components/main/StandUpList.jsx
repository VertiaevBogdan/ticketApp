import { useEffect, useState } from "react";
// import axios from "axios";
import StandUpCard from "./StandUpCard.jsx";

function StandUpList() {

    const [standups, setStandups] = useState([]);

    useEffect(() => {
        // временно заглушка
        setStandups([
            {
                id: 1,
                title: "React Basics",
                thumbnail_url: "../../",
                video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                id: 2,
                title: "Django REST Framework",
                thumbnail_url: "https://picsum.photos/300/200?random=2",
                video_url: "https://www.youtube.com/watch?v=abcd1234"
            },
            {
                id: 3,
                title: "Postgres Tutorial",
                thumbnail_url: "https://picsum.photos/300/200?random=3",
                video_url: "https://www.youtube.com/watch?v=efgh5678"
            }
        ]);

        // потом заменишь на API-запрос:
        // axios.get("/api/videos/").then(res => setVideos(res.data));
    }, []);

    return (
        <section class="w-full">
            <div class="border-top-line"></div>
            <p className="text-[2.8rem] font-bold text-[#801219] mb-[1.5rem]">предыдущие стендапы</p>
            <div className="grid grid-cols-3 gap-6 p-6">
                {standups.map(video => (
                    <StandUpCard key={video.id} video={video} />
                ))}
            </div>
        </section>
    );
}


export default StandUpList