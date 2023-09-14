import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopicNav from "../components/Topic/TopicNav";
import Subtopics from "../components/Topic/Subtopics";
import Flashcards from "../components/Topic/Flashcards";
import Footer from "../components/Footer";

export default function Topic() {
    const location = useLocation();
    const data = location?.state;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <section id="topic">
            <TopicNav/>
            {
                data?.subtopics?.length > 0
                    ? (<Subtopics props = {data}/>)
                    : (<Flashcards/>)
            }
            </section>
            <Footer/>
        </>
    )
}