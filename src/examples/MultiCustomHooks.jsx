// Hooks
import { useCounter, useFetch } from '../hooks/index';
import { Characters, Button, Loading, Title, CustomNavBar } from './index';

const MultiCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${counter}`
  );

  const { results } = !!data && data;

  return (
    <>
      <div
        className='sticky-top'
        style={{
          backgroundColor: '#242424',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Title />
        <br />
        <CustomNavBar
          btn1={
            <Button
              text='Prev Page'
              onClick={() => counter >= 2 && decrement()}
              disable={counter <= 1}
            />
          }
          btn2={<Button text='Nex Page' onClick={() => increment()} />}
          page={counter}
        />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        !!results && results.map((i) => <Characters key={i.id} {...i} />)
      )}
    </>
  );
};

export default MultiCustomHooks;
