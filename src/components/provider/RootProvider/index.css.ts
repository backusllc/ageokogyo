import { globalStyle } from "@vanilla-extract/css";

import { createTheme } from "@vanilla-extract/css";

globalStyle("html,body,#___gatsby,#gatsby-focus-wrapper", {
  height: "100%",
});

globalStyle("html", {
  scrollPaddingTop: "120px",
});

globalStyle("input, select, textarea", {
  appearance: "none",
  border: "solid 1px #ccc",
  borderRadius: "2px",
  color: "#3E3E3E",
});

globalStyle("input:focus-visible, select:focus-visible, textarea:focus-visible", {
  outline: "#C4A870",
  border: "1px solid #C4A870",
});

globalStyle("button", {
  cursor: "pointer",
  color: "#3E3E3E",
});

globalStyle("iframe", {
  width: "100%",
});

globalStyle("*, ::after,::before", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily:
    'Zen Kaku Gothic New, "sans-serif","-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"',
  color: "#3E3E3E",
  lineHeight: "1.5",
  fontSize: "0.875rem",
});

globalStyle("ul", { listStyleType: "none" });
globalStyle("a", { textDecoration: "none", wordBreak: "normal", display: "block", color: "#333" });
globalStyle("img", {
  maxWidth: "100%",
  display: "block",
});

globalStyle("table", {
  borderCollapse: "collapse",
  marginBottom: "2rem",
  width: "100%",
});

globalStyle(".breadcrumbs li span", {
  whiteSpace: "nowrap",
});

globalStyle(".breadcrumbs li:last-child span", {
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  maxHeight: "24px",
});

// globalStyle("th", {
//   width: "35%",
//   padding: "1rem 0.5rem",
//   fontSize: "1rem",
// });

// globalStyle("td", {
//   padding: "1rem 0.5rem",
//   fontSize: "1rem",
// });

// globalStyle("li", {
//   listStyle: "none",
// });

globalStyle(".faq h2", {
  fontSize: "16px",
  letterSpacing: "2.24px",
  lineHeight: "190%",
  fontWeight: "500",
  color: "#3E3A39",
  borderBottom: "1px solid #CCCCCC",
  paddingBottom: "5px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "24px",
      letterSpacing: "2.88px",
      lineHeight: "100%",
      paddingBottom: "15px",
    },
  },
});

globalStyle(".faq h3", {
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "1.08px",
  lineHeight: "150%",
  color: "#3E3A39",
  marginTop: "10px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "18px",
      lineHeight: "130%",
      marginTop: "15px",
    },
  },
});

globalStyle(".faq p,.faq a", {
  fontSize: "14px",
  fontWeight: "400",
  letterSpacing: "0.84px",
  lineHeight: "150%",
});

globalStyle(".faq .question", {
  position: "relative",
  paddingLeft: "30px",
});

globalStyle(".faq .question:before", {
  content: "Q.",
  position: "absolute",
  left: 0,
  width: "40px",
  fontSize: "20px",
  letterSpacing: "2.4px",
  lineHeight: "120%",
  color: "#CCCCCC",
});

globalStyle(".faq .answer", {
  position: "relative",
  paddingLeft: "30px",
  margin: "10px 0 30px 0",

  "@media": {
    "screen and (min-width: 768px)": {
      margin: "17px 0 40px 0",
    },
  },
});

globalStyle(".faq .answer:before", {
  content: "A.",
  position: "absolute",
  left: 0,
  width: "40px",
  fontSize: "20px",
  letterSpacing: "2.4px",
  lineHeight: "120%",
  color: "#C4A870",
});

globalStyle(".recruit .title", {
  fontSize: "18px",
  fontWeight: "500",
  letterSpacing: "1.08px",
  lineHeight: "150%",
  padding: "13px 25px",
  borderTop: "4px solid #DFCDAA",
  borderBottom: "4px solid #DFCDAA",
  width: "fit-content",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "24px",
      letterSpacing: "2.88px",
      lineHeight: "100%",
      padding: "15px 30px",
      margin: "0",
    },
  },
});

globalStyle(".recruit table", {
  marginTop: "30px",
  "@media": {
    "screen and (min-width: 768px)": {
      marginTop: "60px",
    },
  },
});

globalStyle(".recruit tr", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  border: "none",

  marginTop: "30px",
  paddingTop: "30px",
});

globalStyle(".recruit .description tr:before", {
  content: "",
  position: "absolute",
  top: 0,
  left: 0,
  width: "40px",
  height: "2px",
  background: "#ccc",
});

globalStyle(".recruit .description tr:first-child", {
  marginTop: 0,
  paddingTop: 0,
});

globalStyle(".recruit .description tr:first-child:before", {
  content: "none",
});

globalStyle(".recruit .description th,.recruit td", {
  margin: "0",
  padding: "0",
  textAlign: "left",
});

globalStyle(".recruit .description th", {
  fontSize: "18px",
  letterSpacing: "2.16px",
  lineHeight: "150%",
});

globalStyle(".recruit .description td,.recruit .description li,.recruit .description a,.recruit .description p", {
  fontSize: "14px",
  letterSpacing: "0.84px",
  lineHeight: "130%",
  marginTop: "5px",
});

globalStyle(".page h2", {
  backgroundColor: "#00762D",
  fontSize: "1.25rem",
  color: "#fff",
  marginBottom: "2rem",
  padding: "0.25rem 1.5rem",
});

globalStyle(".page h3", {
  position: "relative",
  marginBottom: "2rem",
  fontSize: "1.5rem",
  fontWeight: "700",
  padding: "0.25rem 1.5rem",
});

globalStyle(".page h3:before", {
  content: "",
  top: "0px",
  left: "0px",
  width: "8px",
  height: "30px",
  position: "absolute",
  backgroundColor: "#00762D",
  transform: "scaleX(1)",
});

globalStyle(".company .description .titleEn", {
  fontFamily: "Poppins, sans-serif",
  fontSize: "21px",
  letterSpacing: "2.99px",
  lineHeight: "150%",
  margin: "30px 0 0 0",
  color: "#3E3A39",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "36px",
      letterSpacing: "7.2px",
      lineHeight: "150%",
      margin: "60px 0 0 0",
    },
  },
});

globalStyle(".company .description .titleEn:first-child", {
  margin: 0,
});

globalStyle(".company .description .titleJa", {
  fontSize: "10px",
  fontWeight: 400,
  letterSpacing: "3px",
  lineHeight: "120%",
  color: "#3E3A39",
  borderBottom: "1px solid #ccc",

  paddingBottom: "17px",
  marginBottom: "17px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "12px",
      letterSpacing: "3.6px",
      lineHeight: "200%",

      paddingBottom: "20px",
      marginBottom: "20px",
    },
  },
});

globalStyle(".company .description .titleJa.map", {
  border: "none",
});

globalStyle(".company .description table", {});

globalStyle(".company .description th,.company .description td", {
  textAlign: "left",
});

globalStyle(".company .description tr", {
  display: "block",
  padding: "5px 0",
});

globalStyle(".company .description th", {
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.84px",
  lineHeight: "130%",
  width: "100px",
  verticalAlign: "baseline",
});

globalStyle(".company .description td", {
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.84px",
  lineHeight: "130%",
});

globalStyle(".company .description table p", {
  margin: 0,
});

// globalStyle(".company ul", {
//   marginBottom: "2rem",
// });

// globalStyle(".company li", {
//   fontSize: "1rem",
// });

// globalStyle(".company tr", {
//   border: "solid #999999 1px",
// });

// globalStyle(".company th", {
//   backgroundColor: "#D9D9D9",
// });

// globalStyle(".company table p", {
//   margin: "0",
// });

// globalStyle(".company h2", {
//   backgroundColor: "#00762D",
//   fontSize: "1.25rem",
//   color: "#fff",
//   marginBottom: "2rem",
//   padding: "0.25rem 1.5rem",
// });

globalStyle(".company .timeline > li", {
  // margin: "5px 0",
  borderLeft: "1px #ccc solid",
  paddingTop: "10px",
});

globalStyle(".company .timeline-content", {
  display: "block",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
  position: "relative",
  width: "75%",
  paddingLeft: "2rem",
});

globalStyle(".company li:first-child", {
  paddingTop: 0,
});

globalStyle(".company .timeline-period", {
  width: "130px",
  marginRight: "2rem",

  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.84px",
  lineHeight: "130%",
});

globalStyle(".company .timeline p", {
  margin: 0,
});

globalStyle(".company .timeline-content:before", {
  content: "",
  width: "12px",
  height: "12px",
  background: "#DFCDAA",
  position: "absolute",
  left: "-7px",
  top: "5px",
  borderRadius: "100%",
});

globalStyle(".term_page", {
  padding: "30px 0 60px 0",
  maxWidth: "1092px",
  width: "calc(100% - 30px)",
  margin: "0 auto",

  "@media": {
    "screen and (min-width: 768px)": {
      padding: "60px 0 120px 0",
      width: "calc(100% - 60px)",
    },
  },
});

globalStyle(".page h1,.page h2,.page h3,.term_page h1,.term_page h2,.term_page h3", {
  marginBottom: "2rem",
});

globalStyle(".term_page h1", {
  fontSize: "16px",
  letterSpacing: "2.24px",
  lineHeight: "200%",

  borderBottom: "1px solid #ccc",
  paddingBottom: "17px",
  marginBottom: "17px",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "24px",
      letterSpacing: "2.88px",
      lineHeight: "100%",

      paddingBottom: "20px",
      marginBottom: "20px",
    },
  },
});

globalStyle(".term_page th,.term_page td", {
  textAlign: "left",
  fontSize: "14px",
  letterSpacing: "0.84px",
  lineHeight: "130%",
  padding: "5px 0",

  "@media": {
    "screen and (min-width: 768px)": {
      padding: "10px 0",
    },
  },
});

globalStyle(".term_page tr", {
  padding: "5px 0",

  "@media": {
    "screen and (min-width: 768px)": {
      padding: "10px 0",
    },
  },
});

globalStyle(".term_page th", {
  fontWeight: 500,
  paddingRight: "5px",
  minWidth: "110px",
});

globalStyle("h1,h2,h3,h4", {
  textTransform: "capitalize",
  lineHeight: "1.25",
  marginBottom: "0.75rem",
  fontWeight: "400",
  margin: "0",
  padding: "0",
});

globalStyle("h1", {
  fontSize: "2rem",
  fontWeight: "700",
});
globalStyle("h2", {
  fontSize: "1.5rem",
  fontWeight: "700",
});
globalStyle("h3", {
  fontSize: "1.25rem",
  fontWeight: "700",
});
globalStyle("h4", {
  fontSize: "0.875rem",
});
globalStyle("p,span,strong", {
  fontSize: "1rem",
  marginBottom: "12px",
  lineHeight: "150%",
  color: "#3E3E3E",
});

globalStyle("li", {
  fontSize: "1rem",
  lineHeight: "150%",
  color: "#3E3E3E",
});

globalStyle("body", {
  color: "#333",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

globalStyle(".root-wrap", {
  minHeight: "100%",
  scrollPaddingTop: "100px",
  display: "flex",
  flexDirection: "column",
});

globalStyle("main", {
  flex: 1,
});

globalStyle("header,footer", {
  width: "100%",
});

globalStyle("section", {
  marginBottom: "72px",
  position: "relative",
});

globalStyle(".inner", {
  width: "calc(100% - 30px)",
  maxWidth: "990px",
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "calc(100% - 60px)",
    },
  },
});

globalStyle(".description p", {
  lineHeight: "1.7rem",
});

globalStyle(".hero .slick-prev", {
  display: "none !important",
});

globalStyle(".hero .slick-next", {
  display: "none !important",
});

globalStyle(".slick-slider .slick-prev:before,.slick-slider .slick-next:before", {
  content: "",
  position: "absolute",
  top: "calc(50%)",
  width: "14px",
  height: "14px",
  borderTop: "1px solid #3E3E3E",
  borderRight: "1px solid #3E3E3E",
});

globalStyle(".slick-slider .slick-prev,.slick-slider .slick-next", {
  zIndex: 1,
});

globalStyle(".slick-slider .slick-prev:before", {
  transform: "rotate(-135deg) translateY(-50%)",
  top: "calc(50% - 50px)",
  left: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      left: "30px",
    },
  },
});

globalStyle(".slick-slider .slick-next:before", {
  transform: "rotate(45deg) translateY(-50%)",
  top: "calc(50% - 50px)",
  right: "60px",
  "@media": {
    "screen and (min-width: 768px)": {
      right: "30px",
    },
  },
});

globalStyle(".hero .slick-dots", {
  bottom: "-40px",
});

globalStyle(".recommend .slick-slider .slick-track, .slick-slider .slick-list", {
  display: "flex",
  gap: "30px",
  "@media": {
    "screen and (min-width: 768px)": {
      justifyContent: "center",
    },
  },
});

globalStyle(".slick-slider .slick-track, .slick-slider .slick-list", {
  display: "flex",
  "@media": {
    "screen and (min-width: 768px)": {
      justifyContent: "center",
    },
  },
});

globalStyle(".slick-slider .slick-dots li button::before", {
  border: "1px solid #ccc",
  color: "transparent",
  borderRadius: "50%",
  width: "10px",
  height: "10px",
});

globalStyle(".slick-slider .slick-dots li.slick-active button:before", {
  border: "transparent",
  background: "#A5A5A5",
  color: "transparent",
  borderRadius: "50%",
  width: "10px",
  height: "10px",
});

globalStyle(".trash", {
  width: "35px",
  height: "35px",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "45px",
      height: "45px",
    },
  },
});

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
