import { memo } from 'react';

const Son = memo(({ value, increment }) => {
  console.log('<Son /> Rendered');

  return (
    <button className='btn btn-primary me-2' onClick={() => increment(value)}>
      {value}
    </button>
  );
});

export default Son;
