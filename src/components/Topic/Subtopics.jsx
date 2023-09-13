import Card from "../Card";

export default function Subtopics(props) {

    const data = props?.props;

    return (
        <section id="subtopics">
                {
                    data?.subtopics?.map((topic) => {
                        return(<Card key={topic.name} name={topic.name} img={topic.img} flashcards={topic.flashcards}/>)
                    })
                }

            </section>
    )
}
