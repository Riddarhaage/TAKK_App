import { useEffect, useState } from 'react';
import '../style.css';
import SignCard from './SignCard';

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
            <SignCard signArray={signs} />
        </div>
    )

}








export default App;