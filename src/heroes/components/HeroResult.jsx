import { Link } from 'react-router-dom';

const HeroDetail = ({
  id,
  superhero,
  // characters,
  // alter_ego,
  // first_appearance,
  // publisher,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className='container mt-4 mb-4'>
      <div className='row align-items-center'>
        <div className='col-md-4'>
          <img
            src={imagePath}
            className='img-thumbnail animate__animated animate__fadeInDown animate__faster'
            alt={id}
          />
        </div>
        <div className='col-md-8 text-center animate__animated animate__fadeInRight animate__faster'>
          <div className='card'>
            <div className='card-header text-center'>
              <h5 className='card-title'>{superhero}</h5>
            </div>
            <div className='card-footer'>
              <Link to={`../hero/${id}`} className='btn btn-outline-primary'>
                Show More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
