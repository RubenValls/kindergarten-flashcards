import { useNavigate } from "react-router-dom";
export default function TopicNav() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <nav>
            <i className="fa-solid fa-backward-step fa-2xl" onClick={handleNavigate}></i>
            <img src="../assets/images/mainBanner.png" alt="nav-image" id="nav-image"/>
        </nav>
    )
}