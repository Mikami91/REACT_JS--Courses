import { memo } from 'react';

const TodoItem = memo(({ todo, onToggleTodo, onDeleteTodo }) => {
  const { id, description, done } = todo;

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${
          done ? 'text-decoration-line-through' : ''
        }`}
      >
        {description}
      </span>

      <div>
        <button
          className={`btn btn-outline-${done ? 'success' : 'secondary'} me-2`}
          onClick={() => onToggleTodo(id)}
        >
          Done
        </button>
        <button
          className='btn btn-outline-danger ms-2'
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default TodoItem;
