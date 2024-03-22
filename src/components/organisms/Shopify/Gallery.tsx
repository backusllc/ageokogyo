import React, { useEffect, useState } from "react";
import { sprinkles } from "../../../styles/sprinkles.css";
import {
  divGalleryWrap,
  selectedProduct,
  divSubGalleryWrap,
  divSubGalleryItem,
  imgWrap,
  selectedProductImage,
  galleryImage,
} from "./Gallery.css";

const Gallery = ({ product }: any) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  useEffect(() => {
    setCurrentImage(product.images[0]);
  }, [product]);

  const divGallery = sprinkles({
    width: {
      mobile: "100%",
      tablet: "50%",
      desktop: "50%",
    },
  });

  return (
    <>
      <div className={`${divGallery} ${divGalleryWrap}`}>
        <div className={`${selectedProduct} ${imgWrap}`}>
          <img src={currentImage.src} alt="" className={selectedProductImage} />
        </div>

        <div className={divSubGalleryWrap}>
          {product.images.map((x: any, i: number) =>
            currentImage === product.images[i] ? (
              <div className={divSubGalleryItem} key={i}>
                <img src={x.src} alt="" className={galleryImage} />
              </div>
            ) : (
              <div onMouseOver={e => setCurrentImage(product.images[i])} className={divSubGalleryItem}>
                <img src={x.src} alt="" className={galleryImage} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
