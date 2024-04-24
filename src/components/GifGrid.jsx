import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifts';
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const images = await getGifs(category);
    setImages(images);
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};

GifGrid.propsType = {
  category: PropTypes.string.isRequired,
};
