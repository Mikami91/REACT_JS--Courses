// Components
import { TodoItem } from '../components';

const TodoList = ({ state, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul className='list-group mb-5'>
      {state.map((i) => (
        <TodoItem
          key={i.id}
          todo={i}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
