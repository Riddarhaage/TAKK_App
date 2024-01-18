import React, { useEffect, useState } from 'react';
import SignCard, {MeaningBuilderSignCard} from './SignCard';

function MeaningBuilder(props) {
    const { signArray, onSignClick } = props;
    const [meaning, setMeaning] = useState('');
    const [meaningArray, setMeaningArray] = useState([]);

    const findMatchingSigns = (input) => {
        const inputWords = input.toLowerCase().trim().split(' ');
        const signs = [];
    
        for (const word of inputWords) {
            // Skip empty strings
            if (!word.trim()) {
                continue;
            }
    
            let matchedSign = signArray.find(sign => sign.title.toLowerCase() === word);
    
            if (!matchedSign) {
                // If no exact match, try finding a sign that starts with the word
                matchedSign = signArray.find(sign => sign.title.toLowerCase().startsWith(word));
            }
    
            if (matchedSign) {
                // Add the matched sign
                signs.push(matchedSign);
            } else {
                // Create a placeholder for the unmatched word
                signs.push({
                    title: word,
                    imgUrl: "https://fakeimg.pl/150x150/3f5a75/cccccc?font=bebas&text=" + word
                });
            }
        }
    
        return signs;
    };
    


    useEffect(() => {
        const matchedSigns = findMatchingSigns(meaning);
        setMeaningArray(matchedSigns);
    }, [meaning, signArray]);

    return (
        <div className="meaning-input">
            <h1>Bygg en mening</h1>
            <input
                className='meaning-input'
                id="meaning-input"
                key="meaning-input"
                type="text"
                placeholder="Skriv en mening..."
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
            />
            <MeaningBuilderSignCard signArray={meaningArray} onSignClick={onSignClick}/>
        </div>
    );
}

export default MeaningBuilder;
