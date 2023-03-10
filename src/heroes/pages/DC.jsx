// Components
import { HeroList } from '../components';
import { PageTitle } from '../../ui/components';

const DC = () => {
  return (
    <>
      <PageTitle title='DC Page' />
      <HeroList publisher={'DC Comics'} />
    </>
  );
};

export default DC;
