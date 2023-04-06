import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

const RTKApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => setTodoId(todoId - 1);
  const nextTodo = () => setTodoId(todoId + 1);

  return (
    <>
      <h1>RTK Query</h1>
      <hr />
      <h4>Is Loading: {isLoading ? 'true' : 'false'}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev</button>
      <button onClick={nextTodo}>Next</button>

      {/* <ul>
        {todos.map((i) => (
          <li key={i.id}>
            <strong> {i.completed ? 'DONE' : 'PENDING'} - </strong>
            {i.title}
          </li>
        ))}
      </ul> */}
      {/* <button>Next</button> */}
    </>
  );
};

export default RTKApp;
