import { useState } from 'react';
import PropTypes from 'prop-types';

export function CounterApp({ title, subtitle, value }) {
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
      <h2>{subtitle}</h2>
      <h3>{state}</h3>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleLess}>Less</button>
      <button id='btn-reset' aria-label='btn-reset' onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  title: 'Counter App',
  subtitle: 'Value',
  value: 0,
};
