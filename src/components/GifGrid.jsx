import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifts';
export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  });
  return (
    <>
      <h3>{category}</h3>
      <h2>Hola mundo</h2>
    </>
  );
};

GifGrid.propsType = {
  category: PropTypes.string.isRequired,
};
