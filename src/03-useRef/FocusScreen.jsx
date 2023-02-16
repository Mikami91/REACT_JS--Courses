import { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <>
      <h1>useRef App</h1>
      <h3>Focus Screen</h3>
      <br />
      <input
        ref={inputRef}
        type='text'
        placeholder='Insert your name'
        className='form-control'
      />
      <button className='btn btn-primary mt-3' onClick={onClick}>
        Set focus
      </button>
    </>
  );
};

export default FocusScreen;
