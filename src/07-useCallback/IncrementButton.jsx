import { memo } from 'react';

const IncrementButton = memo(({ onClick }) => {
  console.log('<IncrementButton/> Rendered');

  return (
    <button className='btn btn-primary' onClick={() => onClick()}>
      Increment
    </button>
  );
});

export default IncrementButton;
