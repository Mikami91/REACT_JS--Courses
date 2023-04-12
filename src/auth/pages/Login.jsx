import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Google } from '@mui/icons-material';
// Layouts
import { FormLayout } from '../layout';
// Hooks
import { useForm } from '../../hooks';
import { useDispatchAuth } from '../../store/auth/hooks';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { status, success, errorMessage } = useSelector((state) => state.auth);

  const { checkingAuthentication, startLoginWithEmail, startGoogleSingIn } =
    useDispatchAuth();

  const { email, password, onInputChange, formState } = useForm(initialValues);

  const isAuthtenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();

    checkingAuthentication();

    startLoginWithEmail(formState);
  };

  const onGoogleSignIn = () => startGoogleSingIn(formState);

  return (
    <>
      <FormLayout
        title='Login'
        children={
          <form
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={onSubmit}
          >
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Email'
                  type='email'
                  placeholder='youremail@gmail.com'
                  autoComplete='new-password'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  // error={!success}
                  // helperText={!success ? errorMessage : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Password'
                  type='password'
                  placeholder='Password'
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autoComplete: 'off',
                    },
                  }}
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant='contained'
                  type='submit'
                  disabled={isAuthtenticated}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={onGoogleSignIn}
                  disabled={isAuthtenticated}
                >
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
