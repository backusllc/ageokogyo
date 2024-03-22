import { style } from "@vanilla-extract/css";

export const productImageContainer: string = style({
  position: "relative",
  aspectRatio: "376 / 260",
});

export const productImageBorder: string = style({
  border: "1px solid #ccc",
});

export const productImage: string = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const title: string = style({
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "1px",
  lineHeight: "150%",
  margin: "10px 0 0 0",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "16px",
      margin: "12px 0 0 0",
    },
  },
});

export const price: string = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "19px",
  fontWeight: "500",
  letterSpacing: "1.08px",
  margin: "0",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "18px",
      margin: "10px 0 0 0",
    },
  },
});

export const tax: string = style({
  display: "inline",
  fontSize: "11px",
  fontWeight: "500",
  lineHeight: "160%",
  letterSpacing: "0.72px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "12px",
    },
  },
});
