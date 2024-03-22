import { style } from "@vanilla-extract/css";

export const bannerContainer: string = style({
  position: "relative",
  height: "250px",
  ":before": {
    content: "",
    position: "absolute",
    inset: 0,
    background: "#000",
    zIndex: 1,
    opacity: 0.2,
  },
  "@media": {
    "screen and (min-width: 768px)": {
      height: "auto",
      maxHeight: "500px",
      aspectRatio: "270 / 100",
      width: "100%",
    },
  },
});

export const titleContainer: string = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 2,
});
