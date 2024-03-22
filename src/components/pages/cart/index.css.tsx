import { style } from "@vanilla-extract/css";

export const cartContainer: string = style({
  width: "calc(100% - 30px)",
  maxWidth: "990px",
  margin: "0 auto",
  padding: "30px 0 60px 0",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "60px 0 120px 0",
    },
  },
});

export const h1: string = style({
  fontSize: "24px",
  fontWeight: 500,
  letterSpacing: "2.88px",
  lineHeight: "100%",
  marginBottom: "10px",
});

export const h2: string = style({
  display: "inline-block",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.84px",
  lineHeight: "140%",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const tableContainer: string = style({
  display: "block",
  marginTop: "17px",
  paddingTop: "17px",
  "@media": {
    "screen and (min-width: 768px)": {
      margin: "17px 0 60px 0",
      paddingTop: "17px",
    },
  },
});

export const thead: string = style({
  display: "none",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "table-header-group",
    },
  },
});

export const tbody: string = style({
  borderTop: "1px solid #e2e2e2",
});

export const tr: string = style({
  height: "25px",
  borderTop: "1px solid #e2e2e2",
});

export const th: string = style({
  fontSize: "14px",
  fontWeight: "400",
});

export const totalWrap: string = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  width: "100%",
  "@media": {
    "screen and (min-width: 768px)": {
      textAlign: "right",
    },
  },
});

export const totalPriceContainer: string = style({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      justifyContent: "end",
    },
  },
});

export const empltyProductWrap: string = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "3rem",
});

export const empltyProductText: string = style({
  marginBottom: "3rem",
  fontSize: "2rem",
});

export const p: string = style({
  fontFamily: "Poppins, sans-serif",
  display: "inline-block",
  fontSize: "21px",
  lineHeight: "115%",
  fontWeight: "500",
  margin: "0 0 0 5px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "26px",
      lineHeight: "130%",
      fontWeight: "500",
    },
  },
});

export const tax: string = style({
  display: "inline-block",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.84px",
  lineHeight: "140%",
  margin: 0,

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const price: string = style({
  color: "#E35700",
  fontWeight: "700",
});

export const small: string = style({
  display: "block",
  fontSize: "14px",
  fontWeight: 400,
  marginTop: "10px",
});

export const attentionSmall: string = style({
  display: "block",
  fontSize: "14px",
  fontWeight: 400,
  color: "#EB3232",
});

export const a: string = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "fit-content",
  padding: "0 60px",
  backgroundColor: "#FFC962",
  fontSize: "14px",
  letterSpacing: "2.8px",
  lineHeight: "170%",
  marginTop: "40px",
  alignSelf: "center",

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

  "@media": {
    "screen and (min-width: 768px)": {
      height: "60px",
      padding: "0 100px",
      alignSelf: "end",

      ":after": {
        width: "14px",
        height: "14px",
      },
    },
  },
});
