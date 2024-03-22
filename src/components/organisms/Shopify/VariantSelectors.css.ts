import { style } from "@vanilla-extract/css";

export const variantContainer: string = style({
  display: "flex",
  alignItems: "center",
});

export const label: string = style({
  fontSize: "12px",
  lineHeight: "140%",
  minWidth: "50px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const selectBox: string = style({
  position: "relative",
  fontSize: "12px",
  lineHeight: "140%",
  width: "100%",
  minWidth: "220px",
  padding: "5px 10px",
  backgroundColor: "white",
  border: "1px solid #CCCCCC",
  appearance: "none",
  ":after": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    width: "30px",
    height: "30px",
    borderRight: "2px solid #333",
    borderBottom: "2px solid #333",
  },

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      maxWidth: "220px",
    },
  },
});
