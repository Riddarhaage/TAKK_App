import React from 'react';

function DescriptionCard({ sign }) { // Destructure 'sign' from props
    // Check if 'sign' is not undefined
    if (!sign) {
        return null; // Or return some placeholder content
    }

    return (
        <div className="overlay">
            <div className="description-card" key={sign.id}>
                <img className="description-img" src={sign.imgUrl} alt={sign.title} />
                <h2 className="signTitle">{sign.title}</h2>
                <h3 className="signDescriptionTitle">Formbeskrivning:</h3>
                    <p className="signDescription">{sign.description}</p>
            </div>
        </div>
    );
}

export default DescriptionCard;
