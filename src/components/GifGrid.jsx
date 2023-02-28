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
      <h3 className='mb-2 mt-1'>{category}</h3>
      <br />

      {isLoading ? (
        <img
          src={loadingLogo}
          alt='loading'
          className='img-fluid rounded'
          style={{ width: 300, height: 300 }}
        />
      ) : (
        <>
          {gifs.map((gif) => (
            <GifItem key={gif.id} {...gif} />
          ))}

          <div
            class='dropdown-divider mb-5'
            style={{ backgroundColor: 'gray', height: 1 }}
          ></div>
        </>
      )}
    </>

    // <>
    //   <h2>{category}</h2>

    //   {isLoading && <img src={loadingLogo} alt='loading' className='img' />}

    //   <div className='card'>
    //     {gifs.map((gif) => (
    //       <GifItem key={gif.id} {...gif} />
    //     ))}
    //   </div>
    // </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
