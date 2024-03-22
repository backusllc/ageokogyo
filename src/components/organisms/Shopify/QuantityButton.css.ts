import { style } from "@vanilla-extract/css";

export const quantityContainer: string = style({
  display: "flex",
  alignItems: "center",
});

export const label: string = style({
  fontSize: "12px",
  height: "140%",
  minWidth: "50px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const quantityBox: string = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: "140%",
  minWidth: "60px",
  height: "30px",
  border: "1px solid #CCCCCC",
});

export const quantityNumber: string = style({
  display: "flex",
  justifyContent: "center",

  fontSize: "12px",
  minWidth: "60px",

  "@media": {
    "screen and (min-width: 1024px)": {
      fontSize: "14px",
      maxWidth: "220px",
    },
  },
});

export const quantityDecreaseButton: string = style({
  color: "#707070",
  fontSize: "22px",
  width: "30px",
  height: "100%",
  background: "#F5F5F5",
  border: "none",
  borderRight: "1px solid #CCCCCC",
});

export const quantityIncreaseButton: string = style({
  color: "#707070",
  fontSize: "14px",
  width: "30px",
  height: "100%",
  background: "#F5F5F5",
  border: "none",
  borderLeft: "1px solid #CCCCCC",
});
