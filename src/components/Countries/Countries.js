import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => { //Countries component
    const [countries, setCountries] = useState([]);
    useEffect(() => { //declaring useEffect with an anonymous func & empty array
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data)); //calling setCountries with data
    }, []);
    return (
        <div>
            <h1>Countries ({countries.length})</h1>
            <div className="grid">
                {
                    countries.map(country => <Country key={country.alpha3Code} flag={country.flag} name={country.name} capital={country.capital} 
                        region={country.region} population={country.population}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;