import React, { useState, useEffect } from 'react';
import classes from './Search.module.css';
const Search = ({ result, back }) => {
  const [term, setTerm] = useState('');

  const filteredResult = result.filter(({ name }) =>
    name.common.toLowerCase().includes(term.toLowerCase())
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!filteredResult.length < 1) {
        back(filteredResult);
      }
    }, 1500);
    return () => {
      clearTimeout(handler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input
            placeholder="enter country name"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className={classes.input}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
