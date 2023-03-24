import React from 'react';
import './displayCountryData.css'

const DisplayCountryData = (props) => {
    console.log(props.country);
    const {name,capital,flags,population,area} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h3>Capital : {capital}</h3>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default DisplayCountryData;