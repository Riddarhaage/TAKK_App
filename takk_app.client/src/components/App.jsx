import { useEffect, useState } from 'react';
import '../style.css';
import SignCard from './SignCard';
import Header from './Header';

function App() {
    const [signs, setSigns] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => res.json())
            .then(data => setSigns(data));
    });
    return (
        <div>
            <Header searchTerm={search} setSearch={setSearch} />
            <SignCard signArray={signs} searchTerm={search} />
        </div>
    )

}








export default App;