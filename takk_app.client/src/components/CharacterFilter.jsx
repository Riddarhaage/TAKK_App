import React from 'react'

function CharacterFilter(props) {
    const {setCharFilter } = props;
    const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split('');

    return (
        <div>
            <button className="charButtons" onClick={() => setCharFilter('#')}>0-9</button>
            {allchars.map(char => (
                <button className="charButtons" key={char} onClick={() => setCharFilter(char)}>{char}</button>
            ))}
        </div>
    );
}

export default CharacterFilter;
