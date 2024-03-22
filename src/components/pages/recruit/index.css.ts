import { style } from "@vanilla-extract/css";

export const recruitPage: string = style({
  background: "#F7F6EF",
});

export const recruitContainer: string = style({
  maxWidth: "990px",
  width: "calc(100% - 30px)",
  margin: "0 auto",
  paddingTop: "20px",
  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "120px",
    },
  },
});

export const recruitInner: string = style({
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  marginTop: "40px",
  padding: "30px 20px",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "60px",
    },
  },
});
