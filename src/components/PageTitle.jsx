import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <Typography
      variant='h4'
      className='animate__animated animate__fadeInLeft animate__faster'
    >
      {title}
    </Typography>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: 'Title',
};

export default PageTitle;
