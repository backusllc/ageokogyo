import { style } from "@vanilla-extract/css";

export const divGalleryWrap: string = style({
});

export const selectedProduct: string = style({
  position: "relative",
  aspectRatio: "4 / 3",
  border: "solid 1px #ccc",
});

export const selectedProductImage: string = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const divSubGalleryWrap: string = style({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "15px",
  "@media": {
    "screen and (min-width: 768px)": {
      marginTop: "20px",
    },
  },
});

export const divSubGalleryItem: string = style({
  cursor: "pointer",
  position: "relative",
  aspectRatio: "4 / 3",
  border: "solid 1px #ccc",
  width: "calc(100% / 4 - 8px)",
  "@media": {
    "screen and (min-width: 1024px)": {
      width: "calc(20% - 8px)",
    },
  },
});

export const galleryImage: string = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const imgWrap: string = style({
  minHeight: "170px",
  "@media": {
    "screen and (min-width: 768px)": {
      minHeight: "270px",
    },
  },
});
