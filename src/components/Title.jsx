import { memo } from 'react';

const Title = memo(() => {
  return (
    <>
      <h1 className='text-center pt-2'>Router App</h1>
      <hr />
    </>
  );
});

export default Title;
