import { useNavigate } from "react-router-dom";
export default function Card({name, img, subtopics, flashcards}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/game/${name.toLowerCase()}`,
      {
        state: {
          name: name,
          img: img,
          subtopics: subtopics,
          flashcards: flashcards,
        }
      }
      )
  }

  return (
    <div className="card" onClick={handleNavigate}>
            <div className="topic-icon">
                <img src={img} alt={name}/>
            </div>
            <div className="topic-title">
                <h2>{name.toUpperCase()}</h2>
            </div>
    </div>
  )
}
