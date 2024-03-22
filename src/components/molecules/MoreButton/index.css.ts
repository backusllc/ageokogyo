import { style } from "@vanilla-extract/css";

export const buttonWrap: string = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "195px",
  height: "40px",
  border: "1px solid #3E3E3E",
  color: "#3E3E3E",
  alignSelf: "center",

  ":after": {
    content: "",
    position: "absolute",
    right: "20px",
    top: "calc(50%)",
    width: "14px",
    height: "14px",
    borderTop: "1px solid #3E3E3E",
    borderRight: "1px solid #3E3E3E",
    transform: "rotate(45deg) translateY(-50%)",
  },

  "@media": {
    "screen and (min-width: 768px)": {
      height: "60px",
      width: "276px",
    },
  },
});

export const primaryButton: string = style({
  background: "#DFCDAA",
  border: "none",
});

export const secondaryButton: string = style({});
