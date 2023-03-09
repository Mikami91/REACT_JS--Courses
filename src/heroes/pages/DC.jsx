// Components
import { HeroList } from '../components';

const DC = () => {
  return (
    <>
      <h1 className='animate__animated animate__fadeInLeft animate__faster'>
        DC Page
      </h1>
      <HeroList publisher={'DC Comics'} />
    </>
  );
};

export default DC;
