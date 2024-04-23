import { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Buscar gif' value={inputValue} onChange={onInputChange} />
    </form>
  );
};

AddCategory.propsType = {
  setCategories: PropTypes.object.isRequired,
};
