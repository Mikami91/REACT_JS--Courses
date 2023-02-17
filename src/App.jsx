// Layouts
import { Header, TodoList } from './layouts';
// Components
import { Footer } from './components';
// Hooks
import { useTodo } from './hooks';

function App() {
  const { state, onAddTodo, onToggleTodo, onDeleteTodo } = useTodo();

  return (
    <>
      <Header state={state} onAddTodo={onAddTodo} />
      <TodoList
        state={state}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
      <Footer />
    </>
  );
}

export default App;
