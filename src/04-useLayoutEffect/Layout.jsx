// Hooks
import { useCounter, useFetch } from '../hooks/index';
import { Characters, Button, Loading } from '../examples/index';

const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${counter}`
  );

  const { results } = !!data && data;

  return (
    <>
      <h1>useLayoutEffect App</h1>
      <p>Page: {counter}</p>

      <Button
        text='Prev Page'
        onClick={() => counter >= 2 && decrement()}
        disable={counter <= 1}
      />

      <Button text='Nex Page' onClick={() => increment()} />

      <br />
      <br />

      {isLoading ? (
        <Loading />
      ) : (
        !!results && results.map((i) => <Characters key={i.id} {...i} />)
      )}
    </>
  );
};

export default Layout;
