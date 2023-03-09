import { memo } from 'react';
import PropTypes from 'prop-types';

const Title = memo(({ text }) => {
  return (
    <>
      <h1 className='text-center pt-2'>{text}</h1>
      <hr />
    </>
  );
});

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: 'Title',
};

export default Title;
