import { useDispatch, useSelector } from 'react-redux';
// Assets
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// Store
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <a href='https://reactjs.org' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>

      <h1>Count is {counter}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementBy(10))}>Increment +10</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(decrementBy(10))}>Decrement -10</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
