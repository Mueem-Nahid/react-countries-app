import React from 'react';
import './country.css';

const Country = (props) => { //Country component
    return (
        <div>
            <div className="country-container">
                <img style={{width: '150px'}} src={props.flag} alt="" />
                <h3>Name: {props.name}</h3>
                <p>Capital: {props.capital}</p>
                <p>Region: {props.region}, Population: {props.population}</p>
            </div>
        </div>
    );
};

export default Country;