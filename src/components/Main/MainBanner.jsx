import { useNavigate } from "react-router-dom";

export default function MainBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/game');
    }

    return (
        <>
            <img src="../assets/images/mainBanner.png" alt="main-banner" id="main-banner"/>
            <button id="main-btn" onClick={handleClick}>Let's Learn</button>
        </>
    )
}
