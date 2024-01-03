import React, { useEffect, useState } from 'react';
import SignCard from './SignCard';

//FIXME: This component is not finished
function MeaningBuilder(props) {
    const { signArray } = props;
    const [meaning, setMeaning] = useState('');
    const [meaningArray, setMeaningArray] = useState([]);

    const findMatchingSigns = (input) => {
        const words = input.split(' ');
        const signs = [];

        for (let i = 0; i < words.length; i++) {
            const potentialMatch = words[i].toLowerCase();

            // Find the first sign that starts with the input word
            const matchedSign = signArray.find(sign => sign.title.toLowerCase().startsWith(potentialMatch));

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
                        <h2 className="signTitle">{sign.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MeaningBuilder;
