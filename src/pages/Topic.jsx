import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopicNav from "../components/Topic/TopicNav";

export default function Topic() {
    const location = useLocation();
    const data = location?.state;

    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.1;
    }, []);

    return (
        <section id="topic">
            <TopicNav/>
            {
                data?.subtopics.length > 0
                    ? (<>SUBTOPICS</>)
                    : (<>TOPIC</>)
            }
            <audio src="../assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </section>
    )
}