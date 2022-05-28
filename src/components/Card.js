import React from 'react';



const Card = ({urlImagen, breedsDog, dogTempera, timeLife}) => {

    return (
      <div className='card'>
        <img 
          src={urlImagen}
          alt='dog'
          
        />

        <p  >
           
           Raza {breedsDog} <br />
           Temperamento { dogTempera}<br />
           Tiempo de vida {timeLife}<br />
           
        </p>
     
          
      </div>
    );
  }
  
  export default Card;