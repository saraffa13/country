import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Country.module.css'

import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Country = ({name, img, currency, capital}) => {
  const [loadedCountryList, setLoadedCountryList] = useState();

  return (
    <Link to={`/country/${name}`}
        className={classes.Body}>
        <p className={classes.name}>{name}</p>
        <p className={classes.capital}>{capital}</p>
        <p className={classes.currency}>{currency}</p>
        <img src={img} />
    </Link>
  );

};

export default Country;
