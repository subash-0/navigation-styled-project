import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import style from '../styles/Gallery.module.css';
const Gallery = () => {

  const [images, setImages] = useState([
    
  ]);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=43899306-25d6fd30880d5c42f477a5c6f&amp;q=yellow+flowers&amp;image_type=photo&amp;pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        const newImages = data.hits.map((item) => {
          if (item.imageHeight < 4032) {
            return {
              original: item.largeImageURL,
              thumbnail: item.previewURL,
            };
          }
          return null; // Return null for items not meeting the condition
        }).filter(item => item !== null); // Filter out null values

        setImages((prevImages) => [...prevImages, ...newImages]);
      });
  }, []);

  return (
    <div className='py-20 sm:flex justify-center items-center bg-[var(--bg-primary)]  h-screen sm:py-12 sm:px-20'>
   <ImageGallery items={images}  showThumbnails={false} showIndex={true}  />
    </div>
  )
}

export default Gallery
