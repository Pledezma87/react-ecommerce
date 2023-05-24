import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleInputChange}
            />
        </div>
    );
};


export default SearchBar;