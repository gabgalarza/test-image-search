import { useState } from 'react'
import styles from './carousel.module.css'

const Arrow = ({ handleClick, glyph }) => (
	<div className={styles.arrow} onClick={handleClick}>
		{ glyph }
	</div>
);

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [displayLightbox, setDisplayLightbox] = useState(false)
	
	const previousSlide = () => {
		const lastIndex = images.length - 1;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
	}
	
	const nextSlide = () => {
		const lastIndex = images.length - 1;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		setCurrentImageIndex(index);
	}

  const expandImage = () => setDisplayLightbox(true);
  const closeImage = () => setDisplayLightbox(false);
  
  return (
    <div className={styles.gallery}>
      <Arrow handleClick={previousSlide} glyph="&#9664;" />
      <div className={styles.slide} onClick={expandImage}>
        <img src={images[currentImageIndex].src.portrait} alt="" />
      </div>
      <Arrow handleClick={nextSlide} glyph="&#9654;" />
      {displayLightbox
        ? <div className={styles.lightbox}>
            <div className={styles.lightcontainer}>
              <img src={images[currentImageIndex].src.portrait} alt="" />
              <div className={styles.close} onClick={closeImage}>&#215; Close</div>
            </div>
          </div>
        : ''}
    </div>
  );
}

export default Carousel