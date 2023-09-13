import Card from "../Card";
import { useEffect, useState } from "react"

export default function GameTopic() {
    const [topics, setTopics] = useState([]);
    
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        fetch('../mocks/topics.json')
            .then(response => response.json())
            .then(data => setTopics(data))
            .catch(error => console.log(error));
    }

    return (
        <section id="gameTopic">
            {
                topics?.topics?.map((topic) => {
                    return(<Card key={topic.name} name={topic.name} img={topic.img} subtopics={topic.subtopics} flashcards={topic?.flashcards} />)
                })
            }
        </section>
    )
}
