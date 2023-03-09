import { Link } from 'react-router-dom';
// Hooks
import { useScreen } from '../../ui/hooks';

const Heroes = () => {
  const { isMobile, height } = useScreen();

  return (
    <>
      <h1 className='animate__animated animate__fadeInLeft animate__faster'>
        Heroes Page
      </h1>

      <div className='container text-center mt-4 mb-4'>
        <div
          className='row justify-content-around'
          style={{ marginTop: `${height / 10}px` }}
        >
          <div className='col-sm col-md-4'>
            <Link to='dc'>
              <img
                style={{ width: isMobile ? '200px' : '' }}
                src='/assets/dc.png'
                className='figure-img img-fluid animate__animated animate__rotateIn animate__faster'
                alt='dc'
              />
            </Link>
          </div>
          <div className='col-sm col-md-4'>
            <Link to='marvel'>
              <img
                style={{ width: isMobile ? '200px' : '' }}
                src='/assets/marvel.png'
                className='figure-img img-fluid animate__animated animate__rotateIn animate__faster'
                alt='marvel'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroes;
