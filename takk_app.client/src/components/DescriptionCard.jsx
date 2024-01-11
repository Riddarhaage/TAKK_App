import React from 'react';
import AddCategoryToSign from './AddCategoryToSign';

function DescriptionCard(props) {

    const {sign, onClose} = props;
    if (!sign) {
        return null;
    }

    return (
        <div className="overlay" onClick={onClose}>
            <div className="description-card" key={sign.id} onClick={e => e.stopPropagation()}>
                <img className="description-img" src={sign.imgUrl} alt={sign.title} />
                <h2 className="signTitle">{sign.title}</h2>
                <h3 className="signDescriptionTitle">Formbeskrivning:</h3>
                    <p className="signDescription">{sign.description}</p>
                <AddCategoryToSign />
            </div>
        </div>
    );
}

export default DescriptionCard;
