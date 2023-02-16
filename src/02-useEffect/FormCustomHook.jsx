import { useEffect } from 'react';
// Hooks
import useForm from '../hooks/useForm';
import Message from './Message';

const FormCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>useEffect App</h1>
      <h3>Form Custom Hook</h3>
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      <input
        type='password'
        className='form-control'
        placeholder='Password'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button className='btn btn-primary' onClick={onResetForm}>
        Reset
      </button>

      {/* {username === 'mikami' && <Message />} */}
    </>
  );
};

// useEffect(() => {
//   // console.log('useEffect');
// }, []);

// useEffect(() => {
//   // console.log('formState changed');
// }, [formState]);

// useEffect(() => {
//   // console.log('Email changed');
// }, [email]);

export default FormCustomHook;
