import { useState } from 'react';
import PropTypes from 'prop-types';

export function App({ title, value }) {
  const [state, setState] = useState(value);

  const handleAdd = () => {
    setState(state + 1);
  };

  const handleLess = () => {
    setState(state > 0 ? state - 1 : 0);
  };

  const handleReset = () => {
    setState(value);
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{state}</h2>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleLess}>Less</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
};

App.defaultProps = {
  title: 'Dark-.-Ness',
  value: 0,
};
