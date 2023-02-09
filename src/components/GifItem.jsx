import PropTypes from 'prop-types';

const GifItem = ({ url, title }) => {
  return (
    <>
      <img src={url} alt={title} className='img' />
      <p>{title}</p>
    </>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifItem;
