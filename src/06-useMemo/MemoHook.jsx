import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterations = 100) => {
  console.time();
  for (let i = 0; i < iterations; i++) {
    console.log('Process...');
  }
  console.timeEnd();
  return `${iterations} iteration process done`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [state, setState] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>useMemo App</h1>
      <h3>{counter}</h3>
      <br />

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

      <br />
      <br />

      <h4>{memorizedValue}</h4>
    </>
  );
};

export default MemoHook;
