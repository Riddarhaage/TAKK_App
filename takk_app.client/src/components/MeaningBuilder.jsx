import React, { useEffect, useState } from 'react';
import SignCard from './SignCard';

function MeaningBuilder(props) {
    const { signArray } = props;
    const [meaning, setMeaning] = useState('');
    const [meaningArray, setMeaningArray] = useState([]);

    const findMatchingSigns = (input) => {
        const words = input.split(' ');
        const signs = [];

        for (let i = 0; i < words.length; i++) {
            const potentialMatch = words[i].toLowerCase();

            // Skip empty strings or strings with only spaces
            if (!potentialMatch.trim()) {
                continue;
            }

            // TODO: Test this more once we have more signs
            const matchedSign = signArray.find(sign => sign.title.toLowerCase().split(' ')[0].endsWith(potentialMatch));

            if (matchedSign) {
                signs.push(matchedSign);
            }
        }

        return signs;
    };

    useEffect(() => {
        const matchedSigns = findMatchingSigns(meaning);
        setMeaningArray(matchedSigns);
    }, [meaning, signArray]);

    return (
        <div className="search-input">
            <h1>Bygg en mening</h1>
            <input
                type="text"
                placeholder="Skriv en mening..."
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
            />
            <div className="container">
                {meaningArray.map((sign, index) => (
                    <div key={index} className="cards">
                        <img src={sign.imgUrl} alt={sign.title} />
                        <h2 className="signTitle">{sign.title.split(' ')[0]}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MeaningBuilder;
