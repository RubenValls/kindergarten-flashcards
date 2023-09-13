
export default function SoundCard({name, img}) {
    
    return (
        <div className="card" onClick={() => {console.log('sound')}}>
            <div className="topic-icon">
                <img src={img} alt={name}/>
            </div>
            <div className="topic-title">
                <h2>{name.toUpperCase()}</h2>
            </div>
        </div>
    )
}
