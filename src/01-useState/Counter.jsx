import { useState } from 'react';

const CounterApp = () => {
  const [state, setState] = useState({
    value1: 1,
    value2: 2,
    value3: 3,
  });

  const { value1, value2, value3 } = state;

  return (
    <>
      <h1>Value 1: {value1}</h1>
      <h1>Value 2: {value2}</h1>
      <h1>Value 3: {value3}</h1>
      <hr />
      <button
        className='btn'
        onClick={() =>
          setState({
            ...state,
            value1: value1 + 1,
          })
        }
      >
        Add
      </button>
    </>
  );
};

export default CounterApp;
