// Components
import GifItem from './GifItem';
// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';
// Assets
import loadinGif from '../assets/loading.gif';

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>

      {isLoading && <img src={loadinGif} alt='loading' />}

      <div className='card'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
