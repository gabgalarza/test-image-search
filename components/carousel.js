import React from "react";
import Image from 'next/image'
import styles from './carousel.module.css'

const Carousel = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((img, i) => {
        return (
          <Image
            key={i}
            src={img.src.portrait}
            alt=""
            unsized
            placeholder="blur"
          />
        );
      })}
    </div>
  );
}
 
export default Carousel;