import React from 'react';
import SearchBar from './SearchBar.jsx';
import clases from './estilos/card.module.css';

export default function Nav({ onSearch }) {
    return (

        <div >
            <SearchBar onSearch={onSearch} />
        </div>
    );

};