const TodoCounter = ({ state }) => {
  return (
    <div className='d-flex justify-content-between'>
      <p className='mt-2'>Todo: {state.length} </p>
      <p className='mt-2'>{state.filter((i) => !i.done).length} Remain</p>
    </div>
  );
};

export default TodoCounter;
