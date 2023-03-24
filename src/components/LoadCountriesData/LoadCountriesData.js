import React, { useEffect, useState } from 'react';
import DisplayCountryData from '../DisplayCountryData/DisplayCountryData';
import './LoadCountriesData.css'

const LoadCountriesData = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    }, [])
    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <div className='countrys'>
            {
                countries.map(country=> <DisplayCountryData country={country}></DisplayCountryData>)
            }
            </div>
        </div>
    );
};

export default LoadCountriesData;