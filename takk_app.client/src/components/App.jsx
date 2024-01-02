import { useEffect, useState } from 'react';
import '../style.css';
import SignCard from './SignCard';
import Header from './Header';
import DescriptionCard from './DescriptionCard';

function App() {
    const [signs, setSigns] = useState([]);
    const [search, setSearch] = useState('');
    const [charFilter, setCharFilter] = useState('');
    const [selectedSign, setSelectedSign] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => res.json())
            .then(data => setSigns(data));
    }, []);

    function handleSignClick(sign) {
        setSelectedSign(sign);
    }

    function handleCloseDescription() {
            setSelectedSign(null);
        }

    return (
        <div className="container">
            <Header searchTerm={search} setSearch={setSearch} setCharFilter={ setCharFilter} />
            {selectedSign && <DescriptionCard sign={selectedSign} onClose={handleCloseDescription} />}
            <SignCard signArray={signs} searchTerm={search} charFilter={charFilter} onSignClick={handleSignClick} />
        </div>
    )

}

export default App;