// Components
import { AddForm, Title, TodoCounter } from '../components';

const Header = ({ state, onAddTodo }) => {
  return (
    <div id='header' className='sticky-top'>
      <Title />
      <AddForm onAddTodo={onAddTodo} />
      <TodoCounter state={state} />
      <hr />
    </div>
  );
};

export default Header;
