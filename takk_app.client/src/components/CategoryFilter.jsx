import React from "react";

function CategoryFilter(props) {
    const { setCategoryFilter, setCharFilter } = props;
    const categories = ["Djur", "Bokstäver", "Kropp", "Mat", "Sport", "Övrigt"];
    
    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };
    
    return (
        <div className="category-dropdown-container">
        <select onChange={handleCategoryChange} className="dropdown">
            <option value="">Alla</option>
            {categories.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
            ))}
        </select>
        </div>
    );
    }

export default CategoryFilter;