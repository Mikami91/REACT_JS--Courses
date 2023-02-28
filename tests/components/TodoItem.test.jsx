import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../src/components/TodoItem';

describe('TEST: <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Dark Souls',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Should show a todo remain', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
  });

  test('Should show a todo done', () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByText('Done');
    expect(buttonElement.className).toContain('btn btn-outline-success me-2');
  });

  test('onToggleTodo should be called when is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const buttonElement = screen.getByText('Done');
    fireEvent.click(buttonElement);

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('onDeleteTodo should be called when is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const buttonElement = screen.getByText('Delete');
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
