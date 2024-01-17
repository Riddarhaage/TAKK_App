import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';

function SearchInput({ searchTerm, setSearch }) {
    const [inputValue, setInputValue] = useState(searchTerm);

    const handleIconClick = () => {
        setSearch(inputValue);
    };

    return (
        <div className="search-input">
            <input
                id="searchInput"
                key="searchInput"
                type="text"
                placeholder="Sök..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        setSearch(inputValue);
                    }
                }}
            />
            <ImageSearchRoundedIcon  className='search-icon' onClick={handleIconClick} />
        </div>
    );
}

export default SearchInput;
