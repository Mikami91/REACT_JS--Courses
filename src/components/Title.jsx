import { memo } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Title = memo(({ text }) => {
  return (
    <>
      <Typography variant='h3' id='title'>
        {text}
      </Typography>
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
