import { useEffect, useState } from 'react';
import '../style.css';
import SignCard from './SignCard';
import Header from './Header';
import DescriptionCard from './DescriptionCard';
import MeaningBuilder from './MeaningBuilder';

function App() {
    const [signs, setSigns] = useState([]);
    const [search, setSearch] = useState('');
    const [charFilter, setCharFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [selectedSign, setSelectedSign] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showMeaningBuilder, setShowMeaningBuilder] = useState(false);

    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setSigns(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setIsLoading(false);
            });
    }, []);


    function handleSignClick(sign) {
        setSelectedSign(sign);
    }

    function handleCloseDescription() {
            setSelectedSign(null);
        }

    return (
        <div className="container">
            <Header
                searchTerm={search}
                setSearch={setSearch}
                setCharFilter={setCharFilter}
                showMeaningBuilder={showMeaningBuilder}
                setCategoryFilter={setCategoryFilter}
                setShowMeaningBuilder={setShowMeaningBuilder}
            />
            {selectedSign && <DescriptionCard sign={selectedSign} onClose={handleCloseDescription} />}
            {isLoading ?
                <h2>Laddar...</h2> :
                showMeaningBuilder ?
                    <MeaningBuilder signArray={signs} /> :
                    <SignCard
                        signArray={signs}
                        searchTerm={search}
                        charFilter={charFilter}
                        categoryFilter={categoryFilter}
                        onSignClick={handleSignClick}
                    />
            }
        </div>
    );

}

export default App;