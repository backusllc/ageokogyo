import { style } from "@vanilla-extract/css";

export const titleWrap: string = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
});

export const titleEnglish: string = style({
  fontFamily: "Poppins, sans-serif",
  fontSize: "28px",
  letterSpacing: "3.92px",
  lineHeight: "110%",
  color: "#fff",
  margin: 0,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "60px",
      letterSpacing: "12px",
      lineHeight: "105%",
    },
  },
});

export const titleJapanese: string = style({
  color: "#fff",
  fontSize: "11px",
  letterSpacing: "3.3px",
  lineHeight: "110%",
  fontWeight: 400,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "4.8px",
    },
  },
});
