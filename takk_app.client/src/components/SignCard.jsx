function SignCard(props) {
    const { signArray, searchTerm, charFilter, categoryFilter, onSignClick } = props;

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
            return titleLower.includes(searchTerm.toLowerCase());
        }
        else if (categoryFilter.length > 0) {
            return sign.categories && sign.categories.includes(categoryFilter);
        }
        else {
            return sign;
        }
    })

    return (
        <div className="container">
            {filteredSigns.map(sign => (
                <div className="cards" key={sign.id} onClick={() => onSignClick(sign)}>
                    <img src={sign.imgUrl} alt={sign.title} loading="lazy" />
                    <h2 className="signTitle">{sign.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default SignCard;