import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
// Layouts
import { FormLayout } from '../layout';
// Hooks
import { useForm } from '../../hooks';
import { useDispatchAuth } from '../../store/auth/hooks';

const formData = {
  displayName: 'Nameless',
  email: 'nameless@gmail.com',
  password: '123456',
};

const errorMessages = [
  'The email must have a @',
  'The password must have 6 or more characters',
  'The username must have 4 or more characters',
];

const formValidations = {
  displayName: [(value) => value.length >= 4, errorMessages[2]],
  email: [(value) => value.includes('@'), errorMessages[0]],
  password: [(value) => value.length >= 6, errorMessages[1]],
};

const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { checkingAuthentication, startEmailSingIn } = useDispatchAuth();
  const { status, success, errorMessage } = useSelector((state) => state.auth);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const isAuthtenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    checkingAuthentication();

    startEmailSingIn(formState);
  };

  return (
    <>
      <FormLayout
        title='Register'
        children={
          <form
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={onSubmit}
          >
            <p>Form valid: {isFormValid ? 'Correct' : 'Incorrect'}</p>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField
                  label='Username'
                  type='text'
                  placeholder='Your name'
                  autoComplete='new-password'
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmitted}
                  helperText={formSubmitted ? displayNameValid : ''}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Email'
                  type='email'
                  placeholder='youremail@gmail.com'
                  autoComplete='new-password'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmitted}
                  helperText={formSubmitted ? emailValid || errorMessage : ''}
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
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  error={!!passwordValid && formSubmitted}
                  helperText={formSubmitted ? passwordValid : ''}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  type='submit'
                  disabled={isAuthtenticated}
                  // disabled={!isFormValid || formSubmitted}
                  fullWidth
                >
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
