function SignCard(props) {
    const { signArray, searchTerm, charFilter, categoryFilter, onSignClick, currentPage, itemsPerPage } = props;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredSigns = signArray.filter(sign => {

        const titleLower = sign.title.toLowerCase();

        if (charFilter !== '') {
            if (charFilter === '#') {
                return /^[0-9]/.test(sign.title);
            }
            else {
                return titleLower.startsWith(charFilter.toLowerCase());
            }
        }
        else if (searchTerm.length > 0) {
            return titleLower.startsWith(searchTerm.toLowerCase());
        }
        else if (categoryFilter.length > 0) {
            return sign.categories && sign.categories.includes(categoryFilter);
        }
        else {
            return sign;
        }
    })

    const currentItems = filteredSigns.slice(startIndex, endIndex);

    return (
        <div className="container">
            {currentItems.map(sign => (
                <div className="cards" key={sign.id} onClick={() => onSignClick(sign)}>
                    <img src={sign.imgUrl} alt={sign.title} loading="lazy" />
                    <h2 className="signTitle">{sign.title}</h2>
                </div>
            ))}
        </div>
    );
}

function MeaningBuilderSignCard(props){
    const {signArray, onSignClick} = props;

    return (
        <div className="container">
            {signArray.map((sign, index) => (
                <div className="cards" key={sign.id || index} onClick={() => onSignClick(sign)}>
                    <img src={sign.imgUrl} alt={sign.title} loading="lazy" />
                    <h2 className="signTitle">{sign.title}</h2>
                </div>
            ))}

        </div>
    );
}

export default SignCard;
export {MeaningBuilderSignCard};