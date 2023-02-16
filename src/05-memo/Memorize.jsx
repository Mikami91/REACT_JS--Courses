import { useState } from 'react';
import { useCounter } from '../hooks';
import ShowCounter from './ShowCounter';

const Memorize = () => {
  const { counter, increment } = useCounter();
  const [state, setState] = useState(true);
  return (
    <>
      <h1>Memo App</h1>
      <ShowCounter counter={counter} />
      <button className='btn btn-primary' onClick={() => increment()}>
        +
      </button>
      <button
        className='btn btn-outline-secondary ms-2'
        onClick={() => setState(!state)}
        style={{ backgroundColor: state ? 'green' : 'red', color: 'white' }}
      >
        {state ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default Memorize;
