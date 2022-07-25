import React, { useState } from 'react';
import clases from '../components/estilos/card.module.css';
import Nav from './nav.jsx';


export default function SearchBar({ onSearch }) {
  let [city, setCity] = useState('');

  return (
    <form className={clases.search} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className={clases.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}

      />
      <input className={clases.botonBuscar} type="submit" value="Buscar" />

    </form>

  );
}