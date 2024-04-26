import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories((categories) => [...categories, category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
