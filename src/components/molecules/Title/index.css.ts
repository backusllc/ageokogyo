import { style } from "@vanilla-extract/css";

export const titleWrap: string = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const titleEnglish: string = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "22px",
  letterSpacing: "3.92px",
  lineHeight: "110%",
  margin: 0,

  "@media": {
    "screen and (min-width: 321px)": {
      fontSize: "24px",
    },
    "screen and (min-width: 375px)": {
      fontSize: "26px",
    },
    "screen and (min-width: 768px)": {
      fontSize: "42px",
      letterSpacing: "8.4px",
    },
  },
});

export const titleJapanese: string = style({
  fontSize: "11px",
  letterSpacing: "3.3px",
  color: "#3E3A39",
  fontWeight: 400,

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "12px",
      letterSpacing: "3.6px",
    },
  },
});
