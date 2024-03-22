import { style } from "@vanilla-extract/css";

export const productCardsContainer: string = style({
  padding: "60px 0",
  "@media": {
    "screen and (min-width: 1024px)": {
      padding: "120px 0",
    },
  },
});

export const productsContainer: string = style({
  display: "block",
  marginTop: "30px",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "40px",
    },
  },
});

export const productContainer: string = style({
  width: "100%",
  marginTop: "20px",
  ":first-child": {
    margin: 0,
  },
  "@media": {
    "screen and (min-width: 768px)": {
      width: "30%",
      margin: "0",
    },
    "screen and (min-width: 1024px)": {
      width: "calc((100% / 3) - 20px)",
    },
  },
});

export const backgroundStripe: string = style({
  background: "#F8F8F8",
});

export const titleContainer: string = style({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
});

export const buttonContainer: string = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
});
