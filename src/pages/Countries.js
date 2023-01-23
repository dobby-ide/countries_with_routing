import Search from '../components/Search';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CountriesColumns from '../components/CountriesColumns';
import classes from './Countries.module.css';
function Countries() {
  const [oldResult, setOldResult] = useState([]);
  const [result, setResult] = useState([]);
  const countries = useLoaderData();
  useEffect(() => {
    setResult(countries);
    setOldResult(countries);
  }, [countries]);
  const onFilteringResults = (resulting) => {
    setResult(resulting);
  };
  const renderedLanguages = result.map((language) => {
    let officialLanguage = [];
    for (let i in language.languages) {
      officialLanguage.push(language.languages[i]);
    }
    return officialLanguage;
  });

  return (
    <>
      <div className={classes.searchandcolumns}>
        <div className={classes.columnsheaders}>
          <CountriesColumns />
        </div>
        <div className={classes.search}>
          <Search result={oldResult} back={onFilteringResults} />
        </div>
      </div>
      <ul className={classes.ul}>
        {result.map((country, index) => (
          <li key={country.name.official} className={classes.li}>
            <div className={classes.imageflag}>
              <img
                className={classes.imgflag}
                src={country.flags.png}
                alt="flag"
              ></img>
            </div>
            <div className={classes.countryname}>{country.name.official}</div>
            <div className={classes.region}>{country.region}</div>
            <div className={classes.population}>{country.population}</div>
            <div className={classes.language}>
              {renderedLanguages[index].map((language) => {
                return <div key={language}>{language}</div>;
              })}
            </div>
            <Link
              className={classes.link}
              to={`/countries/${country.name.official}`}
            >
              {'>'}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Countries;
