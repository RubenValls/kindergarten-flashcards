
export default function SoundCard({name, img, sound}) {
    
    const playAudio = () => {
        const audio = new Audio(sound);
        audio.play(); 
    }

    return (
        <div className="card" onClick={playAudio}>
            <div className="topic-icon">
                <img src={img} alt={name}/>
            </div>
            <div className="topic-title">
                <h2>{name.toUpperCase()}</h2>
            </div>
        </div>
    )
}
