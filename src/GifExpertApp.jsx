import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = (category) => {
    setCategories((categories) => [...categories, category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={onAddCategory} />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
