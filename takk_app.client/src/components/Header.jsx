import SearchInput from "./SearchInput";
import CharacterFilter from "./CharacterFilter";
import Hamburger from 'hamburger-react';

function Header(props) {
    const {searchTerm ,setSearch,setCharFilter, showMeaningBuilder, setShowMeaningBuilder} = props;



    return <div className="header">
        <div className="left-container">
            <h1>Tecken</h1>
            <SearchInput searchTerm={searchTerm} setSearch={setSearch} />
            <CharacterFilter setCharFilter={setCharFilter} />
        </div>
        {!showMeaningBuilder ? <button onClick={() => setShowMeaningBuilder(true)}>Bygg mening</button> :
            <button onClick={() => setShowMeaningBuilder(false)}>Visa alla tecken</button>}
        <Hamburger className="hamburger" rounded size={24} duration={0.2} />
    </div>;
}

export default Header;