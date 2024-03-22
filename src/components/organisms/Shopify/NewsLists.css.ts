import { style } from "@vanilla-extract/css";

export const newsSection: string = style({
  maxWidth: "990px",
  margin: "0 auto",
  paddingTop: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const newsLists: string = style({
  width: "100%",
  borderTop: "2px solid #e2e2e2",
  marginBottom: "40px",
});

export const newsList: string = style({
  borderBottom: "2px solid #e2e2e2",
  position: "relative",
});

export const newsLink: string = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "start",
  flexDirection: "column",
  padding: "22px 0",
  gap: "10px",
  ":after": {
    content: "",
    position: "absolute",
    right: "20px",
    top: "calc(50% - 7px)",
    width: "14px",
    height: "15px",
    borderTop: "1px solid #3E3E3E",
    borderRight: "1px solid #3E3E3E",
    transform: "rotate(45deg) translateY(-50%)",
  },
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "20px",
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

export const labelContainer: string = style({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: "20px",
});

export const date: string = style({
  fontFamily: "Poppins, sans-serif",
  color: "#3e3e3e",
  minWidth: "90px",
  margin: 0,

  fontSize: "12px",
  letterSpacing: "1.2px",
  lineHeight: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      letterSpacing: "1.68px",
    },
  },
});

export const label: string = style({
  fontFamily: "Poppins, sans-serif",
  color: "#3E3E3E",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e2e2e2",
  width: "75px",
  minWidth: "75px",
  height: "20px",

  fontSize: "12px",
  letterSpacing: "3.12px",
  lineHeight: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      letterSpacing: "3.64px",

      width: "130px",
      minWidth: "130px",
      height: "40px",
    },
  },
});

export const title: string = style({
  color: "#3e3e3e",
  minWidth: "90px",
  letterSpacing: "1.68px",
  margin: 0,
  paddingRight: "25px",
});
