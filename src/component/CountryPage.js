import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './CountryPage.module.css';

import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";

const CountryPage = () => {

    const cname = useParams().cname;
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${cname}?fullText=true`);
            const responseData = await response.json();
            setCountry(responseData[0]);
        }
        sendRequest();
    }, []);

    console.log(country);

    return (
        <div className={classes.Body}>
            {country && country.name && <h1>{country.name.common}</h1>}
            {<h3>{country.capital}</h3>}
            {country && country.name && <p>{country.name.official}</p>}
            {country && country.population && <p>Population:{country.population}</p>}
            {country && country.latlng && <p>Lat, Lng:{country.latlng}</p>}
            {country && country.region && <p>Continent : {country.region}</p>}
            {country && country.area && <p>Area(Sq km.) : {country.area}</p>}
            {country && country.timezones && <p>Timezone : {country.timezones}</p>}
            {country && country.startOfWeek && <p>Starting Day : {country.startOfWeek}</p>}
            {country && country.flag && <p>Name : {country.flag}</p>}
            {/* {country&&<img src={country.flags.png}>Flag</img>} */}
        </div>
    );

};

export default CountryPage;
