import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainBanner() {
    const navigate = useNavigate();

    useEffect(() => {
        let audio = document.getElementById("mainAudio");
        audio.volume = 0.20;
    }, []);

    const handleClick = () => {
        navigate('/game');
    }

    return (
        <>
            <img src="public/mainBanner.png" alt="main-banner" id="main-banner"/>
            <button id="main-btn" onClick={handleClick}>Let's Learn</button>
            <audio src="public/music/backgroundMusic.mp3" autoPlay loop id="mainAudio"></audio>
        </>
    )
}
