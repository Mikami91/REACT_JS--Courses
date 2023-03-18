import { useNavigate } from 'react-router-dom';
// Components
import PageTitle from '../components/PageTitle';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <PageTitle title='Error Page' />
      <button className='btn btn-outline-dark mt-2' onClick={goBack}>
        Go Back
      </button>
    </>
  );
};

export default Error;
