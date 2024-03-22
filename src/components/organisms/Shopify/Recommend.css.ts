import { style } from "@vanilla-extract/css";

export const recommendContainer: string = style({
  background: "#F7F6EF",
  padding: "60px 0",
  marginTop: "60px",
  overflow: "hidden",
});

export const recommendInner: string = style({
  width: "calc(100% - 2rem)",
  maxWidth: "1194px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "0 auto",
});

export const recommendPcoducts: string = style({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",

  marginTop: "40px",
  "@media": {
    "screen and (min-width: 768px)": {
      flexWrap: "nowrap",
    },
  },
});

export const recommendPcoduct: string = style({
  width: "25%",
});
