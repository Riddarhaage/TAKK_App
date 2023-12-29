function SearchInput({ searchTerm, setSearch }) {
    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm} // Use searchTerm here
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchInput;
