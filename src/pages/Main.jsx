import { useEffect } from "react";
export default function Main() {

    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.25;
    }, []);
    
    return (
        <section id="main">
            <img src="./src/assets/mainBanner.png" alt="main-banner" id="main-banner"/>
            <button id="main-btn">Let's Learn</button>
            <audio src="./src/assets/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </section>
    );
}
