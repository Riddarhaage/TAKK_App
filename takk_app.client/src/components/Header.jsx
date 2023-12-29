import SearchInput from "./SearchInput";

function Header(props) {
    const searchTerm = props.searchTerm;
    const setSearch = props.setSearch;

    return <div className="header">
        <h1>Signs</h1>
        <SearchInput searchTerm={searchTerm} setSearch={setSearch} />
    </div>;
}

export default Header;