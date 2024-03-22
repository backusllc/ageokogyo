import { style } from "@vanilla-extract/css";

export const sliderWrap: string = style({
  maxWidth: "1192px",
  margin: "0 auto",
  width: "100%",
  paddingBottom: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "calc(100% - 60px)",
      paddingBottom: "120px",
    },
  },
});

export const sliders: string = style({});

export const pc: string = style({
  display: "none",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "block",
    },
  },
});

export const sp: string = style({
  display: "block",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});
