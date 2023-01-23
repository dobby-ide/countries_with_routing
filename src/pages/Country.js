import { useParams, useLoaderData } from 'react-router-dom';
import classes from './Country.module.css';

function Country() {
  const country = useLoaderData();
  console.log(country);
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>{params.id}</h1>

      <div className={classes.container}>
        {country.map((country) => {
          return (
            <div className={classes.flagandinfos} key={country.name.common}>
              <div className={classes.flag}>
                <img src={country.flags.png} alt="country flag"></img>
              </div>
              <div className={classes.info}>
                <p>
                  The country belongs to {country.continents} and{' '}
                  {country.subregion} subregion.
                </p>
                <p>
                  Located at the {country.latlng[0]} degree of longitude and{' '}
                  {country.latlng[1]} degree of latitude, this country has a
                  population of {country.population} and it is
                  {country.independent === true
                    ? ' independent'
                    : ' not independent'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Country;
