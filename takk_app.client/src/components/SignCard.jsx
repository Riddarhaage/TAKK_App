import React from 'react';

function SignCard(props) {
    const signs = props.signArray;
    return <div className="container">
        {signs.map(sign => <div className="cards" key={sign.id}>
            <img src={sign.imgUrl} />
            <h2 className="signTitle">{sign.title}</h2>
        </div>)}
    </div>;
}

export default SignCard;