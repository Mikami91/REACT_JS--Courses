import { memo } from 'react';

const ShowCounter = memo(({ counter }) => {
  console.log('<ShowCounter /> Rendered');

  return <h3 style={{ color: 'pink' }}>{counter}</h3>;
});

export default ShowCounter;
