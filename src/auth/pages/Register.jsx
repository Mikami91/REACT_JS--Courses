import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
// Layouts
import { FormLayout } from '../layout';

const Register = () => {
  return (
    <>
      <FormLayout
        title='Register'
        children={
          <form>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField
                  label='Username'
                  type='text'
                  placeholder='Your name'
                  autoComplete='new-password'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Email'
                  type='email'
                  placeholder='youremail@gmail.com'
                  autoComplete='new-password'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Password'
                  type='password'
                  placeholder='Password'
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autoComplete: 'off',
                    },
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Register
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end' mt={2}>
                <Typography mr={1}>Do you already have an account?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  Login
                </Link>
              </Grid>
            </Grid>
          </form>
        }
      />
    </>
  );
};

export default Register;
