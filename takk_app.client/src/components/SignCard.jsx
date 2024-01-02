function SignCard(props) {
    const { signArray, searchTerm, onSignClick } = props;

    const filteredSigns = searchTerm
        ? signArray.filter(sign => sign.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : signArray;

    return (
        <div className="container">
            {filteredSigns.map(sign => (
                <div className="cards" key={sign.id} onClick={() => onSignClick(sign)}>
                    <img src={sign.imgUrl} alt={sign.title} />
                    <h2 className="signTitle">{sign.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default SignCard;
