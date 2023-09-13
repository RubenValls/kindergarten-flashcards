import GameNav from "../components/Game/GameNav";
// import { useEffect } from "react";
import GameTopic from "../components/Game/GameTopic";

export default function Game() {

    // useEffect(() => {
    //     let audio = document.getElementById("mainAudio");
    //     audio.volume = 0.1;
    // }, []);

    return (
        <section id="game">
            <GameNav/>
            <GameTopic/>
            {/* <audio src="../assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio> */}
        </section>
    )
}
