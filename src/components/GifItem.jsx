import PropTypes from 'prop-types';

const GifItem = ({ url, title }) => {
  return (
    <>
      <img
        src={url}
        alt={title}
        className='img-fluid rounded mt-2'
        style={{ width: 300, height: 300 }}
      />
      <h6 className='mb-5 mt-2' style={{ color: 'gray' }}>
        {title}
      </h6>

      {/* <img src={url} alt={title} className='img' />
      <p>{title}</p> */}
    </>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifItem;
