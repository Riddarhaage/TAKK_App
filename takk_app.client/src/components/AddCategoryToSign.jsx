import React from "react";
import CircleIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Circle } from "@mui/icons-material";

function AddCategoryToSign() {
    return (
        <div className="add-category-container">
            <p className="add-category-text">Kategorier</p>
            <CircleIcon fontSize="small" className="add-category-button" />           
        </div>
    )
}

export default AddCategoryToSign;