import SearchInput from "./SearchInput";
import CharacterFilter from "./CharacterFilter";

function Header(props) {
    const {searchTerm ,setSearch,setCharFilter} = props;

    return <div className="header">
        <h1>Tecken</h1>
        <SearchInput searchTerm={searchTerm} setSearch={setSearch} />
        <CharacterFilter setCharFilter={setCharFilter} />
    </div>;
}

export default Header;