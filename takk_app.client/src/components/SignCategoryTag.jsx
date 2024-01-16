import React from "react";

function SignCategoryTag(props) {
    const { sign } = props;
    var categories = [];

    if(sign.categories === null) {
        //do nothing
    }
    else{
        categories = sign.categories.split(',');
    }

    return (
        <div className="add-category-container">
            <div className="add-category-tag-container">
                {categories.length > 0 && categories.map((category, index) => (
                    <div key={index} className="add-category-tag">
                        {category.trim()}
                    </div>
                ))}
            </div> 
        </div>
    );
}

export default SignCategoryTag;
