function SignCard(props) {
    const { signArray, onSignClick } = props;

    return (
        <div className="container">
            {signArray.map(sign => (
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