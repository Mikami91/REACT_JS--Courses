import { useState, useEffect } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Message mounted');

    const onMouseMove = (event) => {
      const { x, y } = event;
      setCoords({ x, y });
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('Message unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <p>User already exist</p>
      {JSON.stringify(coords)}
    </>
  );
};

export default Message;
