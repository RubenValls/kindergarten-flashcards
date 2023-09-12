import GameNav from "../components/Game/GameNav";
import { useEffect } from "react";

export default function Topic() {

    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.1;
    }, []);

    return (
        <section id="topic">
            <GameNav/>
            <audio src="../assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </section>
    )
}