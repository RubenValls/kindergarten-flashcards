import { useNavigate } from "react-router-dom";
export default function TopicCard({name, img, subtopics}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/game/${name.toLowerCase()}`,
      {
        state: {
          name: name,
          img: img,
          subtopics: subtopics
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
