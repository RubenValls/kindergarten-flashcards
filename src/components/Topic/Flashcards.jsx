import { useLocation } from "react-router-dom";
import SoundCard from "../SoundCard";

export default function Flashcards() {
    const location = useLocation();
    const flashcards = location?.state;

    return (
        <section id="flashcards">
                {
                    flashcards?.flashcards?.map((flashcard) => {
                        return(<SoundCard key={flashcard.name} name={flashcard.name} img={flashcard.img} sound={flashcard.sound}/>)
                    })
                }
        </section>
    )
}
