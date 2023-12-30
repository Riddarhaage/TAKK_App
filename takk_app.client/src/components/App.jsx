import { useEffect, useState } from 'react';
import '../style.css';
import SignCard from './SignCard';
import Header from './Header';
import DescriptionCard from './DescriptionCard';

function App() {
    const [signs, setSigns] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://localhost:7051/Sign')
            .then(res => res.json())
            .then(data => setSigns(data));
    });
    return (
        <div className="container">
            <Header searchTerm={search} setSearch={setSearch} />
            {/*Todo: Make it render once a signCard is clicked and closed once clicked outside of the DescriptionCard.*/}
            <DescriptionCard sign={signs[0]} />
            <SignCard signArray={signs} searchTerm={search} />
        </div>
    )

}








export default App;