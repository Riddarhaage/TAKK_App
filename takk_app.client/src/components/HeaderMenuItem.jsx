import React, {useState} from 'react';

function HeaderMenuItem(props) {
    const {text, onClick} = props;
    const [hover, setHover] = useState(false);

    return <div className="header-menu-item" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <p style={{color: hover ? "#FFD700" : "#fff"}}>{text}</p>
    </div>;
}

export default HeaderMenuItem;