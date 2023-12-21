import { useEffect, useState } from 'react';
import '../style.css';

function App() {
    const [signs, setSigns] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => res.json())
            .then(data => setSigns(data));
    });
    return <h1>Hello, World</h1>;
}








export default App;