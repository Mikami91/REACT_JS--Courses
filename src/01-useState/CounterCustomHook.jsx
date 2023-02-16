// Hooks
import useCounter from '../hooks/useCounter';

const CounterAppCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>useState App</h1>
      <h3>Counter Custom Hook</h3>
      <h3>Value: {counter}</h3>
      <button className='btn btn-primary' onClick={() => increment(2)}>
        Add
      </button>
      <button className='btn btn-primary' onClick={() => decrement(2)}>
        Less
      </button>
      <button className='btn btn-primary' onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default CounterAppCustomHook;
