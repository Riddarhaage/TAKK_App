import { useEffect, useState } from 'react';
import '../style.css';

function App() {
    const [signs, setSigns] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => res.json())
            .then(data => setSigns(data));
    });
    return (
        <div>
            <div className="header">
                <h1>Signs</h1>
            </div>
            <div className="container">
                {signs.map(sign =>
                    <div className="cards" key={sign.id}>
                        <img src={sign.imgUrl} />
                        <h2 className="signTitle">{sign.title}</h2>
                    </div>)}
            </div>
        </div>
    )
}








export default App;