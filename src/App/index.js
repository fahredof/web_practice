import './index.css'
import { useState } from "react";
import axios from "axios";
import mindMap from "../assets/mind-map.jpeg"

export const App = () => {
    const [terms, setTerms] = useState(null);
    const [showMap, setShowMap] = useState(false);

    const getTerms = async () => {
        const response = await axios.get('http://localhost:3000/terms');
        setTerms(response.data);
    }

    return (
        <div className="app">
            <div className="app-wrapper">
                <h1>Терминология</h1>
                <div className="action">
                    <button
                        onClick={getTerms}
                        className="action-button"
                    >
                        Получить список терминов
                    </button>
                    <button
                        onClick={() => setShowMap(true)}
                        className="action-button"
                    >
                        Получить карту
                    </button>
                </div>
                {showMap && (
                    <img src={mindMap} alt="mind-map"/>
                )}
                <div className="content">
                    <div className="term-wrapper">
                        {terms && terms.map(({title, description, url}) => (
                            <div className="term">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <a href={url}>{url}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}