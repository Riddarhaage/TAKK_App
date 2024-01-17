import React from "react";

const categories = ["Pronomen", "Personer","Bokstäver", "Yrken", "Verb", "Figurer",
                    "Diverse utrop", "Känslouttryck", "Föremål", "Djur",
                     "Förflyttning", "Mat/Dryck", "Kroppsdelar", "Kläder",
                      "Boende", "Väder", "Tid", "Siffror", "Färger", "Riktningar",
                       "Frågeord", "Hälsningsfraser", "Förklaringar", "Övrigt"];


function CategoryFilter(props) {
    const { setCategoryFilter, setCharFilter } = props;
    
    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };
    
    return (
        <div className="category-dropdown-container">
        <select onChange={handleCategoryChange} className="dropdown" id="categoryDropdown" key="categoryDropdown">
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
export { categories};