const GifItem = ({ url, title }) => {
  return (
    <>
      <img src={url} alt={title} className='img' />
      <p>{title}</p>
    </>
  );
};

export default GifItem;
