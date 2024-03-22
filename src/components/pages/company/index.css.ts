import { style } from "@vanilla-extract/css";

export const companyContainer: string = style({
  maxWidth: "990px",
  margin: "0 auto",
  width: "calc(100% - 60px)",
  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "120px",
    },
  },
});
