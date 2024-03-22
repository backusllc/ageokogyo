import { style } from "@vanilla-extract/css";

export const grid = style({
  maxWidth: "1194px",
  display: "grid",
  padding: "30px 0 60px 0",
  gap: "15px",
  "@media": {
    "screen and (min-width: 768px)": {
      gap: "30px",
      padding: "44px 0 120px 0",
    },
  },
});

export const itemDiv: string = style({
  alignItems: "center",
  gap: "2rem",
});

export const title: string = style({
  fontSize: "11px",
  letterSpacing: "1.68px",
  margin: "5px 0 0 0 ",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      margin: "10px 0 0 0 ",
    },
  },
});

export const imgWrap: string = style({
  width: "100%",
  height: "100%",
  position: "relative",
  aspectRatio: "376 / 259",
});

export const bordered: string = style({
  border: "1px solid #CCCCCC",
});

export const img: string = style({
  position: "absolute",
  inset: "0",
  display: "block",
  maxWidth: "100%",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center center",
});
