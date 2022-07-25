import React from 'react';
import clases from './estilos/card.module.css';

// export default function Card(props, {onClose}) {

//   return(

// <div className={clases.contenedor}>
//        <button className={clases.botonx} onClick={onClose}>X</button>
//        <h2 className={clases.titulo}> {props.name}</h2>

//        <h4 className={clases.tituloMin}>Min {props.min}° 'c'</h4>
//        <h4 className={clases.tituloMax}>Max {props.max}° 'c'</h4>

//        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
//        </div>

//   )

// };

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={clases.contenedor}>

      <button onClick={onClose} className={clases.botonx}>X</button>


      <h2 className={clases.titulo}>{name}</h2>

      <div className={clases.tituloMin}>
        <p className={clases.pmin}>Min</p>
        <p className={clases.pmintemp}>{min}°</p>
      </div>
      <div className={clases.tituloMax}>
        <p className={clases.pmax}>Max</p>
        <p className={clases.pmaxtemp}>{max}°</p>
      </div>

      <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />



    </div>
  );
};