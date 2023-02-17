import { memo } from 'react';

const Title = memo(() => {
  return (
    <>
      <h1 className='text-center pt-2'>Todo App</h1>
      <br />
    </>
  );
});

export default Title;
