import { style } from "@vanilla-extract/css";

export const newsContainer: string = style({
  maxWidth: "990px",
  margin: "0 auto",
  width: "calc(100% - 30px)",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "calc(100% - 60px)",
    },
  },
});

export const labelContainer: string = style({
  display: "flex",
  justifyContent: "flex-start",
  gap: "10px",

  "@media": {
    "screen and (min-width: 768px)": {},
  },
});

export const label: string = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  letterSpacing: "3.12px",
  lineHeight: "100%",
  backgroundColor: "#E3E3E3",
  minWidth: "80px",
  height: "20px",
  "@media": {
    "screen and (min-width: 768px)": {},
  },
});

export const date: string = style({
  fontFamily: "Poppins, sans-serif",

  fontSize: "12px",
  letterSpacing: "1.68px",
  margin: "0",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const titleContainer: string = style({
  margin: "5px 0 10px 0",
  "@media": {
    "screen and (min-width: 768px)": {
      margin: "10px 0 20px 0",
    },
  },
});

export const title: string = style({
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "2.24px",
  lineHeight: "200%",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "24px",
      letterSpacing: "2.88px",
      lineHeight: "100%",
    },
  },
});

export const contentContainer: string = style({
  padding: "30px 0 0 0",
  borderTop: "2px solid rgb(226, 226, 226)",
});

export const buttonContainer: string = style({
  display: "flex",
  justifyContent: "center",
  padding: "30px 0 60px 0",

  "@media": {
    "screen and (min-width: 768px)": {
      padding: "60px 0 120px 0",
    },
  },
});
