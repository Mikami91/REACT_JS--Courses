import React, { useState, useEffect } from 'react';
import Message from './Message';

const Form = () => {
  const [formState, setFormState] = useState({
    username: 'mikami',
    email: '',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect');
  }, []);

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    // console.log('Email changed');
  }, [email]);

  return (
    <>
      <h1>Form</h1>
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

      {username === 'mikami' && <Message />}
    </>
  );
};

export default Form;
