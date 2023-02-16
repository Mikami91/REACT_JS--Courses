import { useState, useCallback } from 'react';
// Components
import IncrementButton from './IncrementButton';

const CallbackHook = () => {
  const [state, setState] = useState(true);
  const [value, setValue] = useState(0);

  const optimizedIncrement = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  return (
    <>
      <h1>useCallback App</h1>
      <h3>{value}</h3>

      <IncrementButton onClick={optimizedIncrement} />

      <button
        className='btn btn-outline- ms-2'
        onClick={() => setState(!state)}
        style={{ backgroundColor: state ? 'green' : 'red', color: 'white' }}
      >
        {state ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default CallbackHook;
