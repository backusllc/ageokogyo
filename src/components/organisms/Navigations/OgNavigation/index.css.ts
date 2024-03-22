import { style } from "@vanilla-extract/css";

export const wrap: string = style({
  position: "fixed",
  top: "0",
  left: "0",
  overflowY: "scroll",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  opacity: 0,
  visibility: "hidden",
  transition: "visibility 0s, opacity 0.2s linear",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },
});

export const sideBarOpen: string = style({
  display: "flex",
  opacity: 1,
  visibility: "visible",
  zIndex: "999",
});

export const crossButton: string = style({
  position: "relative",
  width: "30px",
  height: "30px",
  cursor: "pointer",
});

export const crossSpan: string = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "1px",
  height: "42px",
  backgroundColor: "#3E3E3E",
  transformOrigin: "center",
  ":first-child": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  ":last-child": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

export const container: string = style({
  background: "#fff",
  width: "100vw",
  position: "relative",
});

export const links: string = style({});

export const logoDiv: string = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 15px",
  height: "80px",
});

export const clink: string = style({
  backgroundColor: "#fff",
  margin: "50px auto 0 auto",
  width: "calc(100% - 80px)",

  borderTop: "1px solid #e2e2e2",
  borderBottom: "1px solid #e2e2e2",
});

export const a: string = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "0.75rem",
  alignItems: "center",
  color: "#0a2540",
  textTransform: "capitalize",
  fontWeight: "700",
  fontSize: "1.2rem",
});

export const liMenu: string = style({
  borderTop: "1px solid #e2e2e2",
  ":first-child": {
    border: "none",
  },
});

export const divMenu: string = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const aMenu: string = style({
  color: "#3E3E3E",
  width: "100%",
  fontSize: "19px",
  letterSpacing: "2.66px",
  lineHeight: "160%",
  padding: "15px 0",
});

export const wrapMegaMenu: string = style({
  borderTop: "1px solid #e2e2e2",
  height: 0,
  opacity: 0,
  maxHeight: 0,
  visibility: "collapse",
  padding: "0 20px",
  transition: "all 0.2s linear",
});

export const liMegaMenu: string = style({
  //   borderTop: "1px solid #777777",
});

export const aMegaMenu: string = style({
  position: "relative",
  color: "#3E3E3E",
  width: "100%",
  fontSize: "17px",
  letterSpacing: "2.38px",
  lineHeight: "180%",
  padding: "5px 0 5px 30px",
  ":before": {
    content: "",
    position: "absolute",
    left: "0",
    top: "calc(50%)",
    width: "9px",
    height: "9px",
    borderTop: "1px solid #3E3E3E",
    borderRight: "1px solid #3E3E3E",
    transform: "rotate(45deg) translateY(-50%)",
  },
});

export const accordionHeightActive: string = style({
  maxHeight: "800px",
  height: "100%",
  opacity: 1,
  visibility: "visible",
  padding: "10px 20px",
});

export const hidden: string = style({
  display: "none",
});

export const quantityDiv: string = style({
  position: "absolute",
  top: "5px",
  right: "5px",
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#EB3232",
  color: "#fff",
  fontSize: "10px",
  lineHeight: "100%",
  borderRadius: "50%",
});
