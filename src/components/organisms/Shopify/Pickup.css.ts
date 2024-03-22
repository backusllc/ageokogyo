import { style } from "@vanilla-extract/css";

export const pickupContainer: string = style({
  backgroundColor: "#F7F6EF",
  padding: "60px 0 0 0",
  "@media": {
    "screen and (min-width: 1024px)": {
      padding: "110px 120px",
    },
  },
});

export const pickupInner: string = style({
  maxWidth: "1194px",
  margin: "0 auto",
  width: "calc(100% - 30px)",
  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "120px",
      width: "calc(100% - 60px)",
    },
  },
});

export const itemWrapper: string = style({
  background: "#fff",
  marginTop: "30px",
  padding: "20px",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "102px",
      marginTop: "40px",
    },
  },
});
