import { style } from "@vanilla-extract/css";

export const footerContainer: string = style({
  background: "#DFCDAA",
  padding: "30px 0",
  "@media": {
    "screen and (min-width: 1024px)": {
      padding: "55px 0",
    },
  },
});

export const footerInner: string = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: "1194px",
  width: "calc(100% - 30px)",
  margin: "0 auto",

  "@media": {
    "screen and (min-width: 1024px)": {
      flexDirection: "row-reverse",
      width: "calc(100% - 60px)",
    },
  },
});

export const termLink: string = style({
  fontSize: "14px",
  letterSpacing: "0.75px",
  lineHeight: "200%",
});

export const logoContainer: string = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginTop: "20px",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginTop: "0",
    },
  },
});

export const copyrightContainer: string = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
});

export const companyName: string = style({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "200%",

  "@media": {
    "screen and (min-width: 1024px)": {
      fontSize: "16px",
    },
  },
});

export const copyright: string = style({
  fontSize: "10px",
});
