export default function TopicCard({name, img}) {
  return (
    <div className="card">
            <div className="topic-icon">
                <img src={img} alt={name}/>
            </div>
            <div className="topic-title">
                <h2>{name.toUpperCase()}</h2>
            </div>
    </div>
  )
}
