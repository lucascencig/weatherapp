import React from 'react';
import cities from '../data.js';
// import cities from '../data';
import Card from './Card.jsx';
import clases from './estilos/cards.module.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (

    <div className={clases.contenedor}>

      {
        cities.map(c => (
          <Card
            key={c.id}
            id={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          />

        ))
      }
    </div>
  )
};