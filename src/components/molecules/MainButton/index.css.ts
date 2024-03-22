import { style } from "@vanilla-extract/css";

export const buttonWrap: string = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  width: "276px",
  height: "60px",
  color: "#3E3E3E",
});

export const button: string = style({
  position: "relative",
  display: "inline-flex",
  color: "#3E3E3E",
  padding: "20px 0",
  backgroundColor: "#DFCDAA",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",

  width: "100%",
  border: "none",

  ":after": {
    content: "",
    position: "absolute",
    right: "20px",
    top: "calc(50%)",
    width: "10px",
    height: "10px",
    borderTop: "1px solid #3E3E3E",
    borderRight: "1px solid #3E3E3E",
    transform: "rotate(45deg) translateY(-50%)",
  },
});
