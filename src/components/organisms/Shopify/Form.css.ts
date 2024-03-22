import { style } from "@vanilla-extract/css";

export const formContainer: string = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const formDiv: string = style({
  marginBottom: "20px",
});

export const selectItems: string = style({
  width: "100%",
  fontSize: "1rem",
  padding: "0.5rem",
});

export const label: string = style({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  width: "100%",
  fontSize: "14px",
  marginBottom: "5px",
});

export const abbr: string = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  letterSpacing: "0.5px",
  lineHeight: "150%",
  color: "#fff",
  padding: "2px 5px",

  width: "fit-content",
  background: "#C4A870",
});

export const input: string = style({
  fontSize: "1rem",
  padding: "1rem",
  width: "100%",
});
