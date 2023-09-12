import GameNav from "../components/Game/GameNav";
import { useEffect } from "react";

export default function Game() {

    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.20;
    }, []);

    return (
        <section id="game">
            <GameNav/>
            <audio src="./src/assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </section>
    )
}
