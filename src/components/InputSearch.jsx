import { useState } from 'react';

const InputSearch = ({ onAddCategory }) => {
  const [value, setValue] = useState('');

  const onInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length < 1) return;

    // setCategories((categories) => [...categories, value]);
    onAddCategory(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search gif'
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};

export default InputSearch;
