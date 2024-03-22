import { style } from "@vanilla-extract/css";

export const h1: string = style({
  marginBottom: "1rem",
});

export const button: string = style({
  position: "relative",
  fontSize: "14px",
  letterSpacing: "2.8px",
  backgroundColor: "#FFC962",
  border: "none",
  padding: "10px 50px",
  ":disabled": {
    pointerEvents: "none",
    border: "1px solid #999999",
    backgroundColor: "#cccccc",
    color: "#666666",
  },
  ":after": {
    content: "",
    position: "absolute",
    right: "15px",
    top: "calc(50%)",
    width: "10px",
    height: "10px",
    borderTop: "1px solid #3E3E3E",
    borderRight: "1px solid #3E3E3E",
    transform: "rotate(45deg) translateY(-50%)",
  },
});
