import { style } from "@vanilla-extract/css";

export const newsContainer: string = style({
  maxWidth: "990px",
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
