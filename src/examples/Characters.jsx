import { useLayoutEffect, useRef, useState } from 'react';

const Characters = ({ name, image, species, status }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  useLayoutEffect(() => {
    // console.log(pRef.current.getBoundingClientRect());
    const { width, height, x, y } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height, x, y });
  }, []);

  const color =
    status === 'Alive' ? 'lime' : status === 'Dead' ? 'red' : 'gray';

  return (
    <blockquote className='blockquote text-center'>
      {/* <code>{JSON.stringify(boxSize)}</code> */}
      <img ref={pRef} src={image} alt={name} className='img-fluid rounded' />
      <h4 className='mb-2 mt-1'>{name}</h4>
      <h6 className='mb-0'>{species}</h6>
      <h6 className='mb-1' style={{ color }}>
        - {status} -
      </h6>
      <br />
    </blockquote>
  );
};

export default Characters;
