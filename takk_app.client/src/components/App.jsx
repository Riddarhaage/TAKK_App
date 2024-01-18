import React, { useEffect, useState } from 'react';
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
        const fetchSigns = async () => {
            let url = 'https://localhost:7051/Sign';

            if (charFilter) {
                url = `https://localhost:7051/Sign/get/${charFilter}`;
            } else if (search) {
                url = `https://localhost:7051/Sign/search/${search}`;
            } else if (categoryFilter.length > 0) {
                url = `https://localhost:7051/Sign/${categoryFilter}`;
            }

            setIsLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setSigns(data);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSigns();
    }, [search, charFilter, categoryFilter]);


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
                    <MeaningBuilder signArray={signs} onSignClick={handleSignClick} /> :
                    <SignCard
                        signArray={signs}
                        onSignClick={handleSignClick}
                    />
            }
        </div>
    );

}

export default App;