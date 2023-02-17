// Hooks
import { useForm } from '../hooks';

const AddForm = ({ onAddTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onAdd = () => {
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description.trim(),
    };

    onAddTodo(newTodo);
    onResetForm();
  };

  return (
    <form className='input-group mb-3' onSubmit={() => event.preventDefault()}>
      <input
        type='text'
        className='form-control'
        placeholder='Description'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button className='btn btn-outline-primary' type='button' onClick={onAdd}>
        Add
      </button>
    </form>
  );
};

export default AddForm;
