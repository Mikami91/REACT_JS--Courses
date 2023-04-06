import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Slices
import { getPokemons } from './store/slices/pokemon';

const Pokemon = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log(page);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'}</span>
      <ul>
        {pokemons.map((i) => (
          <li key={i.name}>{i.name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading || page == 0}
        onClick={() => dispatch(getPokemons(page - 1))}
      >
        Prev
      </button>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        Next
      </button>
    </>
  );
};

export default Pokemon;
