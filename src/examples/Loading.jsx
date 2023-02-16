import loading from '../assets/loading.svg';

const Loading = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <img src={loading} alt='Loading' />
    </div>
  );
};

export default Loading;
