import { style } from "@vanilla-extract/css";

export const breadcrumb: string = style({
  display: "flex",
  width: "calc(100% - 30px)",
  alignItems: "center",
  columnGap: "4px",
  justifyContent: "flex-start",
  padding: "15px 0 27px 0",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 1024px)": {
      padding: "20px 0 80px 0",
    },
  },
});

export const item: string = style({
  fontSize: "14px",
  margin: "0 !important",
  marginRight: "0.5rem",
});

export const li: string = style({
  display: "flex",
  columnGap: "4px",
  listStyle: "none",
  fontWeight: "500",
  ":after": {
    content: "/",
    padding: "0 0.2em",
    color: "#707070",
  },
  selectors: {
    "&:last-child:after": {
      content: "none",
    },
  },
});
