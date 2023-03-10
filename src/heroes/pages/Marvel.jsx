// Components
import { HeroList } from '../components';
import { PageTitle } from '../../ui/components';

const Marvel = () => {
  return (
    <>
      <PageTitle title='Marvel Page' />
      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};

export default Marvel;
