import { useEffect } from "react";

export default function MainBanner() {
    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.20;
    }, []);

    return (
        <>
            <img src="./src/assets/mainBanner.png" alt="main-banner" id="main-banner"/>
            <button id="main-btn">Let's Learn</button>
            <audio src="./src/assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </>
    )
}
