import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minWidth: '100%',
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'secondary.main',
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutlined sx={{ fontSize: 100, color: 'black' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color='black' variant='h5'>
          Select or createa input
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
