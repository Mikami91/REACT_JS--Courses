import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
// Components
import { FormLayout } from '../layout';
// Layouts

const Login = () => {
  return (
    <>
      <FormLayout
        title='Login'
        children={
          <form>
            <Grid container spacing={2} mt={2}>
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
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography ml={1}>Google</Typography>
                </Button>
              </Grid>
              <Grid container direction='row' justifyContent='end' mt={2}>
                <Link
                  component={RouterLink}
                  color='inherit'
                  to='/auth/register'
                >
                  Create a account
                </Link>
              </Grid>
            </Grid>
          </form>
        }
      />
    </>
  );
};

export default Login;
