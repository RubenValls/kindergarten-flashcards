// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainBanner() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     let audio = document.getElementById("mainAudio");
    //     audio.volume = 0.15;
    // }, []);

    const handleClick = () => {
        navigate('/game');
    }

    return (
        <>
            <img src="../assets/images/mainBanner.png" alt="main-banner" id="main-banner"/>
            <button id="main-btn" onClick={handleClick}>Let's Learn</button>
            {/* <audio src="../assets/music/backgroundMusic.mp3" id="mainAudio" autoPlay loop></audio> */}
        </>
    )
}
