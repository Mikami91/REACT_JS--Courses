import PropTypes from 'prop-types';
// Components
import GifItem from './GifItem';
// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';
// Assets
import loadingLogo from '../assets/loading.svg';

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>

      {isLoading && <img src={loadingLogo} alt='loading' className='img' />}

      <div className='card'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
