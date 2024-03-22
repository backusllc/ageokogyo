import { style } from "@vanilla-extract/css";

export const toggleBtn: string = style({
  width: "30px",
  height: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
});

export const bar: string = style({
  display: "block",
  width: "100%",
  height: "1px",
  border: "0.5px solid #3E3E3E",
  margin: 0,
  ":first-child": {
    marginBottom: "12px",
  },
  ":last-child": {
    marginTop: "12px",
  },
});
