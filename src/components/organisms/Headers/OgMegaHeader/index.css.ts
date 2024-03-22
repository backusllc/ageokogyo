import { globalStyle, style } from "@vanilla-extract/css";

export const banner: string = style({
  textAlign: "center",
  backgroundColor: "red",
  color: "white",
  fontSize: "14px",
});

export const div: string = style({
  margin: "0 auto",
});

export const nav: string = style({
  position: "relative",
  background: "transparent",
  zIndex: "1",
  height: "5rem",
  display: "flex",
  alignItems: "center",
});

export const navCenter: string = style({
  width: "100%",
  margin: "0 auto",
  display: "flex",
  "@media": {
    "screen and (min-width: 768px)": {
      alignItems: "center",
    },
  },
});

export const navHeader: string = style({
  position: "relative",
  maxWidth: "1194px",
  width: "calc(100% - 30px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 1024px)": {
      height: "120px",
      width: "calc(100% - 60px)",
    },
  },
});

export const divHeader: string = style({
  display: "flex",
  columnGap: "23px",
  justifyContent: "space-between",
  height: "80px",
  "@media": {
    "screen and (min-width: 1024px)": {
      height: "120px",
    },
  },
});

export const overlay: string = style({
  position: "absolute",
  height: "120px",
  width: "100%",
  top: 0,
  backgroundColor: "#fff",
  zIndex: "999",
  opacity: 0.8,
});

export const header: string = style({
  position: "sticky",
  top: "0",
  backgroundColor: "#FFFFFF",
  zIndex: "999",
  background: "#fff",
  margin: "0 auto",
});

export const ulHeader: string = style({
  display: "none",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "flex",
      columnGap: "20px",
    },
  },
});

export const liMenu: string = style({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
});

export const aMenu: string = style({
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "1px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const svgMenu: string = style({
  width: "50px",
});

export const wrapMegaMenu: string = style({
  position: "absolute",
  zIndex: "100",
  background: "#F7F6EF",
  left: "0",
  right: "0",
  width: "100%",
  top: "120px",
  opacity: 0,
  visibility: "hidden",
  transition: "visibility 0s linear 0.2s, opacity 0.2s linear",
});

export const wrapMegaMenuShow: string = style({
  opacity: 1,
  visibility: "visible",
  transition: "visibility 0s linear 0s, opacity 0.2s linear",
});

export const ulMegaMenu: string = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "0 auto",
  maxWidth: "810px",
});

export const liMegaMenu: string = style({
  width: "25%",
  padding: "2.5em 1.9rem",
});

export const aMegaMenu: string = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "5px",
  color: "#3E3E3E",
  fontSize: "14px",
});

export const activeMenu: string = style({
  color: "#C4A870",
});

export const quantityDiv: string = style({
  position: "absolute",
  top: "calc(50% - 25px)",
  right: "-10px",
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
  transform: "translateY(-50%)",
});

globalStyle("svg", {
  width: "50px",
});
