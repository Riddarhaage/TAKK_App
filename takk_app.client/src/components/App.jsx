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
                <button className="btn">Add Sign</button>
            </div>
            <div className="container">
                    {signs.map(sign => <div className="cards" key={sign.id}><img src={sign.imgUrl} /></div>)}
            </div>
        </div>
    )
}








export default App;