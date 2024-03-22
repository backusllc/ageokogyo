import { style } from "@vanilla-extract/css";

export const contentContainer: string = style({
  width: "calc(100% - 30px)",
  maxWidth: "684px",
  margin: "0 auto",
  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "120px",
    },
  },
});
