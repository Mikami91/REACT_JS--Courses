// Components
import { FloatButton } from '../components';
// Layouts
import JournalLayout from '../layout/JournalLayout';
// Views
import { NoteView, NothingSelectedView } from '../views';

const Home = () => {
  return (
    <>
      <JournalLayout>
        {/* <NothingSelectedView /> */}
        <NoteView />
        <FloatButton />
      </JournalLayout>
    </>
  );
};

export default Home;
