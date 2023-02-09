import { useState } from 'react';
import PropTypes from 'prop-types';

const InputSearch = ({ onAddCategory }) => {
  const [value, setValue] = useState('');

  const onInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length < 1) return;

    onAddCategory(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Search gif'
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};

InputSearch.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default InputSearch;
