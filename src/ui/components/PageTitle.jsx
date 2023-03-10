import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <h4 className='text-muted animate__animated animate__fadeInLeft animate__faster'>
      {title}
    </h4>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: 'Title',
};

export default PageTitle;
