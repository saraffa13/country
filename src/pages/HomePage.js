import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HomePage.module.css'

import Form from 'react-bootstrap/Form';
import Country from '../component/Country';

const HomePage = () => {
  const [loadedContinent, setLoadedContinent] = useState("");
  const [loadedCountryList, setLoadedCountryList] = useState([]);
  const [countryListToBeShown, setCountryListToBeShown] = useState([]);

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const response = await fetch('https://restcountries.com/v3.1/name/australia?fullText=true');
  //     const responseData = await response.json();
  //     setLoadedCountry(responseData);
  //     console.log(responseData);
  //   }
  //   sendRequest();
  // }, [loadedCountry]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const responseData = await response.json();
      setLoadedCountryList(responseData);
      setCountryListToBeShown(responseData);
    }
    sendRequest();
  }, []);



  // Selecting the country
  useEffect(() => {
    const newList = [];
    loadedCountryList.map(c => {
      if (loadedContinent === "") newList.push(c);
      else if (loadedContinent === "north america" && c.subregion === 'North America') {
        newList.push(c);
      }
      else if (loadedContinent === "south america" && c.subregion === 'South America') {
        newList.push(c);
      }
      else if (c.region.trim().toLowerCase() === loadedContinent) {
        newList.push(c);
      }
    })
    console.log(newList);
    setCountryListToBeShown(newList);
  }, [loadedContinent]);



  return (
    <div className={classes.Body}>
      <div className={classes.dropdown}>
        <Form.Select aria-label="Default select example" onChange={(e) => {
          setLoadedContinent(e.target.value);
        }}>
          {/* <option >Choose The Continent</option> */}
          <option value="" >All</option>
          <option value="asia" >Asia</option>
          <option value="africa">Africa</option>
          <option value="north america">North America</option>
          <option value="south america">South America</option>
          <option value="europe">Europe</option>
          <option value="oceania">Australia </option>
          {/* <option value="antartica">Antartica</option> */}
        </Form.Select>
      </div>
      <div className={classes.countryList}>
        {countryListToBeShown.map(c =>
          <Country
            key={c.area}
            name={c.name.common}
            officialName={c.name.official}
            img={c.flags.png} capital={c.capital}
            continent={c.continents}
            population={c.population}
            startOfWeek={c.startOfWeek}
            status={c.status}
            unMember={c.unMember}
            // currency={c.currencies[Object.keys(c.currencies)[0]].name}
          />
        )}
        {/* <Country name={'India'} img={'https://flagcdn.com/w320/kw.png'} currency={'Rupees'} capital={'New Delhi'}/> */}
      </div>
    </div>
  );

};

export default HomePage;
