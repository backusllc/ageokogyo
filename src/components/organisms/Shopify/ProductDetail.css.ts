import { style } from "@vanilla-extract/css";

export const productContainer: string = style({
  maxWidth: "1194px",
  margin: "0 auto",
  width: "calc(100% - 30px)",

  display: "flex",
  flexDirection: "column",
  columnGap: "30px",
  rowGap: "15px",
  "@media": {
    "screen and (min-width: 1024px)": {
      flexDirection: "row",
      width: "calc(100% - 60px)",
    },
  },
});

export const productDetailContainer: string = style({
  width: "100%",
  "@media": {
    "screen and (min-width: 1024px)": {
      width: "47%",
    },
  },
});

export const titleSp: string = style({
  fontSize: "18px",
  fontWeight: "500",
  letterSpacing: "1.2px",
  lineHeight: "150%",
  margin: "0",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
});

export const titlePc: string = style({
  display: "none",
  fontSize: "20px",
  fontWeight: "500",
  letterSpacing: "1.2px",
  margin: "0",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "inline",
    },
  },
});

export const description: string = style({
  fontSize: "14px",
  letterSpacing: "1px",
  marginTop: "15px",
  "@media": {
    "screen and (min-width: 1024px)": {
      margin: "20px 0 0 0",
    },
  },
});

export const optionContainer: string = style({
  marginTop: "30px",
});

export const quantityContainer: string = style({
  marginTop: "10px",
});

export const priceContainer: string = style({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  marginTop: "10px",

  "@media": {
    "screen and (min-width: 1024px)": {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "30px",
    },
  },
});

export const price: string = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "21px",
  fontWeight: "500",
  lineHeight: "110%",
  letterSpacing: "1.26px",
  margin: 0,
  marginTop: "10px",
  "@media": {
    "screen and (min-width: 1024px)": {
      fontSize: "26px",
      lineHeight: "180%",
      letterSpacing: "1.56px",
      margin: 0,
    },
  },
});

export const tax: string = style({
  display: "inline",
  fontSize: "14px",
  letterSpacing: "0.84px",
});

export const addCartButtonContainer: string = style({
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  marginTop: "25px",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginTop: "0",
    },
  },
});

export const buttonContainer: string = style({
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  padding: "30px 0 60px 0",

  "@media": {
    "screen and (min-width: 1024px)": {
      padding: "60px 0 120px 0",
    },
  },
});
