import React from 'react';

//TODO: Finish styling this component
function CharacterFilter(props) {
    const { setCharFilter } = props;
    const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split('');

    const handleCharChange = (event) => {
        setCharFilter(event.target.value);
    };

    return (
        <div className="char-dropdown-container">
            <select onChange={handleCharChange} className="charDropdown">
                <option value="">Alla</option>
                <option value="#">0-9</option>
                {allchars.map(char => (
                    <option key={char} value={char}>{char}</option>
                ))}
            </select>
        </div>
    );
}

export default CharacterFilter;
