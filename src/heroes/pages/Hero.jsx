import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

// Helpers
import { getHeroById } from '../helpers';

const Hero = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const imagePath = `/assets/${hero.id}.jpg`;

  if (!hero) {
    return <Navigate to='/heroes' />;
  }

  return (
    <>
      <h1 className='animate__animated animate__fadeInLeft animate__faster'>
        Hero Page
      </h1>
      <div className='container mt-4 mb-5'>
        <div className='row align-items-center'>
          <div className='col-md-5'>
            <img
              src={imagePath}
              className='img-thumbnail animate__animated animate__fadeInLeft animate__faster'
              alt={id}
            />
          </div>
          <div className='col-md-7 animate__animated animate__fadeInUp animate__faster'>
            <div className='card'>
              <div className='card-header text-center'>
                <h5 className='card-title'>{hero.superhero}</h5>
                <p className='card-text'>{hero.characters}</p>
              </div>
              <div className='card-body'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>{`Alter ego: ${hero.alter_ego}`}</li>
                  <li className='list-group-item'>{`Fisrt appearance: ${hero.first_appearance}`}</li>
                  <li className='list-group-item'>{`Publisher: ${hero.publisher}`}</li>
                </ul>
              </div>

              <div className='card-footer text-center'>
                <Link to={-1} className='btn btn-outline-primary'>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
