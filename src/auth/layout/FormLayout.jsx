import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FormLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', padding: 4 }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{
          width: { sm: 450 },
          // backgroundColor: 'gray',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant='h5' align='center'>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

FormLayout.defaultProps = {
  children: <></>,
  title: 'Title',
};

export default FormLayout;
