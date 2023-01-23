import classes from './CountriesColumns.module.css';
function CountriesColumns() {
  return (
    <div className={classes.container}>
      <div className={classes.flag}>FLAG</div>
      <div className={classes.name}>NAME</div>
      <div className={classes.region}>REGION</div>
      <div className={classes.population}>POPULATION</div>
      <div className={classes.language}>LANGUAGE(S)</div>
    </div>
  );
}
export default CountriesColumns;
