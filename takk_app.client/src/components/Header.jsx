import React, { useState, useEffect } from 'react';
import SearchInput from "./SearchInput";
import CharacterFilter from "./CharacterFilter";
import CategoryFilter from './CategoryFilter';
import Hamburger from 'hamburger-react';
import HeaderMenuItem from "./HeaderMenuItem";

//TODO: Add menu that pops up when hamburger is clicked

function Header(props) {
    const {searchTerm ,setSearch,setCharFilter,setCategoryFilter, showMeaningBuilder, setShowMeaningBuilder} = props;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="header">
            <div className="left-container">
                <h1>Tecken</h1>
                <SearchInput searchTerm={searchTerm} setSearch={setSearch} />
                <CharacterFilter setCharFilter={setCharFilter} />
                <CategoryFilter setCategoryFilter={setCategoryFilter} setCharFilter={setCharFilter}/>
            </div>
            <div className="right-container">
                {windowWidth <= 900 ? 
                    <Hamburger className="hamburger" rounded size={24} duration={0.2} /> :
                    <>
                        {!showMeaningBuilder ? <HeaderMenuItem text="Bygg Mening" onClick={() => setShowMeaningBuilder(true)} /> :
                        <HeaderMenuItem text="Visa alla tecken" onClick={() => setShowMeaningBuilder(false)} />}
                        <HeaderMenuItem text="Kategori" />
                        <HeaderMenuItem text="Skriv Ut" />
                        <HeaderMenuItem text="Ladda Ner" />
                        <HeaderMenuItem text="Om" />
                    </>
                }
            </div>
        </div>
    );
}

export default Header;