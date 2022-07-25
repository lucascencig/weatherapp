import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import Nav from './components/nav.jsx';


function App() {
  const [cities, setCities] = useState([]);
  const apiKey = 'fbd580e4d8a926af629de99345a8fc8c'; 

  function onSearch(ciudad) {
   

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso_json) => {
      if(recurso_json.main !== undefined){
        const ciudad = {
          min: Math.round(recurso_json.main.temp_min),
          max: Math.round(recurso_json.main.temp_max),
          img: recurso_json.weather[0].icon,
          id: recurso_json.id,
          wind: recurso_json.wind.speed,
          temp: recurso_json.main.temp,
          name: recurso_json.name,
          weather: recurso_json.weather[0].main,
          clouds: recurso_json.clouds.all,
          latitud: recurso_json.coord.lat,
          longitud: recurso_json.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }
   
  return (
    <div className="App">
       
        <Nav onSearch={onSearch} />
        <Cards
          cities={cities} onClose={onClose}
          />
        
      </div>
      
     
    
  );
}

export default App;