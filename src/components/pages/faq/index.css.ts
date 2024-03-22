import { style } from "@vanilla-extract/css";

export const faqContainer: string = style({
  maxWidth: "990px",
  width: "calc(100% - 30px)",
  margin: "0 auto",

  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "120px",
    },
  },
});
