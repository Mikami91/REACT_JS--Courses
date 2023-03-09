// Components
import { HeroList } from '../components';

const Marvel = () => {
  return (
    <>
      <h1 className='animate__animated animate__fadeInLeft animate__faster'>
        Marvel Page
      </h1>
      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};

export default Marvel;
