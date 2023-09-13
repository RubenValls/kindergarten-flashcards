import { useEffect } from "react";
import Footer from "../components/Footer";
import GameNav from "../components/Game/GameNav";
import GameTopic from "../components/Game/GameTopic";

export default function Game() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <section id="game">
            <GameNav/>
            <GameTopic/>
            <Footer/>
        </section>
    )
}
