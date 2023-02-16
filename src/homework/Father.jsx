import { useCallback, useState } from 'react';
import Son from './Son';

const Father = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback((num) => {
    setValue((oldValue) => oldValue + num);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Son key={n} value={n} increment={increment} />
      ))}
    </div>
  );
};

export default Father;
