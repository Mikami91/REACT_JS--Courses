import { Link } from 'react-router-dom';
// Hooks
import { useScreen } from '../../ui/hooks';

const HeroCard = ({ id, superhero }) => {
  const { isMobile } = useScreen();

  const imagePath = `/heroes/${id}.jpg`;

  return (
    <div className='col col-sm-6 col-md-4 col-lg-3 text-center'>
      <div
        className='card'
        style={{
          width: isMobile ? '8.6rem' : '',
        }}
      >
        <img
          src={imagePath}
          className='card-img-top animate__animated animate__zoomIn animate__faster'
          alt={id}
        />

        <h6
          className='card-title mt-3 animate__animated animate__slideInDown animate__faster'
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {superhero}
        </h6>
        <div className='card-footer'>
          <Link
            to={`../hero/${id}`}
            className='btn btn-outline-primary form-control'
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
