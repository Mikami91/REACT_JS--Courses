import { useMemo } from 'react';
// Components
import HeroCard from './HeroCard';
// Helpers
import { getHeroesByPublisher } from '../helpers';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='container mt-4 mb-4'>
      <div className='row g-5'>
        {heroes.map((i) => (
          <HeroCard key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};

export default HeroList;
