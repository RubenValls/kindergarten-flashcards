import { useState } from "react";

export default function SoundCard({name, img, sound}) {
    const [title, setTitle] = useState(false);
    
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
                {
                    title
                        ? (<h2>{name.toUpperCase()}</h2>)
                        : (<h2 id="secretName">{'*'.repeat(name.length)}</h2>)
                }
                {
                    title
                        ? (<i className="fa-regular fa-eye-slash fa-lg" onClick={() => setTitle(!title)}></i>)
                        : (<i className="fa-regular fa-eye fa-lg" onClick={() => setTitle(!title)}></i>)
                }
            </div>
        </div>
    )
}
