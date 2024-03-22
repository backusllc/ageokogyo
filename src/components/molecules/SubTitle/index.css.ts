import { style } from "@vanilla-extract/css";

export const titleWrap: string = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const titleEnglish: string = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "24px",
  letterSpacing: "3.36px",
  lineHeight: "130%",
  margin: 0,

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "36px",
      letterSpacing: "7.2px",
      lineHeight: "150%",
    },
  },
});

export const titleJapanese: string = style({
  fontSize: "10px",
  letterSpacing: "3px",
  lineHeight: "120%",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "12px",
      letterSpacing: "3.6px",
      lineHeight: "200%",
    },
  },
});
