import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifts';
import { GifItem } from './GifItem';
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
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propsType = {
  category: PropTypes.string.isRequired,
};
