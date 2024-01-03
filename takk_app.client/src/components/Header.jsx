import SearchInput from "./SearchInput";
import CharacterFilter from "./CharacterFilter";
import Hamburger from 'hamburger-react';

function Header(props) {
    const {searchTerm ,setSearch,setCharFilter} = props;

    return <div className="header">
        <Hamburger rounded size={24} duration={0.2} />
        <h1>Tecken</h1>
        <SearchInput searchTerm={searchTerm} setSearch={setSearch} />
        <CharacterFilter setCharFilter={setCharFilter} />
    </div>;
}

export default Header;