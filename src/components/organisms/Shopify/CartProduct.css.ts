import { style } from "@vanilla-extract/css";

export const productImageContainer: string = style({
  position: "relative",
  aspectRatio: "376 / 260",
});

export const productImageBorder: string = style({
  border: "1px solid #ccc",
});

export const ammount: string = style({
  fontSize: "19px",
  fontWeight: 500,
  letterSpacing: "1.14px",
  lineHeight: "126%",
  marginTop: "10px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      letterSpacing: "0.84px",
      lineHeight: "150%",
      marginTop: "0",
    },
  },
});

export const tax: string = style({
  fontSize: "11px",
  letterSpacing: "0.61px",
});

export const productName: string = style({
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.84px",
  lineHeight: "150%",
  padding: 0,
  margin: 0,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      fontWeight: 400,
      letterSpacing: "0.84px",
      lineHeight: "150%",
    },
  },
});

export const quantity: string = style({
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.7px",
  lineHeight: "150%",
  marginTop: "10px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      letterSpacing: "0.84px",
      marginTop: "0",
    },
  },
});

export const productImage: string = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const tr: string = style({
  borderBottom: "1px solid #ccc",
});

export const imageTd: string = style({
  padding: "20px 0",
  width: "30%",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "27%",
    },
  },
});

export const nameTd: string = style({
  display: "none",
  padding: "0 30px",
  width: "40%",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "23%",
      display: "table-cell",
    },
  },
});

export const ammountTd: string = style({
  display: "none",
  textAlign: "center",
  width: "10%",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "20%",
      display: "table-cell",
    },
  },
});

export const totalTd: string = style({
  display: "none",
  padding: "1rem 0.25rem",
  textAlign: "center",
  width: "10%",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "20%",
      display: "table-cell",
    },
  },
});

export const productTd: string = style({
  display: "table-cell",
  padding: "20px 15px",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const trashTd: string = style({
  padding: "1rem 0.25rem",
  textAlign: "center",
  width: "10%",
  cursor: "pointer",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "10%",
    },
  },
});
