import { globalStyle } from '@vanilla-extract/css';

import { createTheme } from "@vanilla-extract/css";

globalStyle('html,body,#___gatsby,#gatsby-focus-wrapper', {
  height: '100%',
});

globalStyle('input, select', {
  appearance: 'none',
  border: 'solid 1px #333',
  borderRadius: '2px',
  color:'#000000',
});

globalStyle('button', {
  cursor: 'pointer',
  color:'#000000',
})

globalStyle('iframe', {
  width: '100%',
});

globalStyle('*, ::after,::before', {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: '"Noto Sans JP", "sans-serif","-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"',
  lineHeight: '1.5',
  fontSize: '0.875rem',
});

globalStyle('ul', { listStyleType: 'none' });
globalStyle('a', { textDecoration: 'none', wordBreak: 'normal', display: 'block', color: '#333' });
globalStyle('img', {
  width: '100%',
  display: 'block',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  width: '100%',
});

globalStyle('tr', {
  borderTop: 'solid #D9D9D9 1px',
  borderBottom: 'solid #D9D9D9 1px',
});

globalStyle('th', {
  width: '35%',
  padding: '1rem 0.5rem',
  fontSize: '1rem',
});

globalStyle('td', {
  padding: '1rem 0.5rem',
  fontSize: '1rem',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('.page h2', {
  backgroundColor: '#00762D',
  fontSize: '1.25rem',
  color: "#fff",
  marginBottom: "2rem",
  padding: "0.25rem 1.5rem"
});

globalStyle('.page h3', {
  position: 'relative',
  marginBottom: "2rem",
  fontSize: '1.5rem',
  fontWeight: '700',
  padding: "0.25rem 1.5rem"
});

globalStyle('.page h3:before', {
  content: '',
  top: '0px',
  left: '0px',
  width: '8px',
  height: '30px',
  position: 'absolute',
  backgroundColor: '#00762D',
  transform: 'scaleX(1)',
});

globalStyle('.company ul', {
  marginBottom: '2rem',
});

globalStyle('.company li', {
  fontSize: '1rem',
});

globalStyle('.company tr', {
  border: 'solid #999999 1px',
});

globalStyle('.company th', {
  backgroundColor: '#D9D9D9',
});

globalStyle('.company table p', {
  margin: '0',
});

globalStyle('.company h2', {
  backgroundColor: '#00762D',
  fontSize: '1.25rem',
  color: "#fff",
  marginBottom: "2rem",
  padding: "0.25rem 1.5rem"
});

globalStyle('.company .timeline > li', {
  margin: '0',
});

globalStyle('.company .timeline-content', {
  display: 'block',
  '@media': {
    'screen and (min-width: 800px)': {
      display: 'flex',
    }
  },
  position: 'relative',
  width: '75%',
  float: 'left',
  paddingLeft: '2rem',
  borderLeft: '1px #555555 solid',
});

globalStyle('.company .timeline-period', {
  width: '130px',
  marginRight: '2rem',
})

globalStyle('.company .timeline > li p', {
  marginTop: '-10px',
});

globalStyle('.company .timeline-content:before', {
  content: '',
  width: '12px',
  height: '12px',
  background: '#00762D',
  position: 'absolute',
  left: '-7px',
  top: '0',
  borderRadius: '100%',
});


globalStyle('.page h1,.page h2,.page h3,.term_page h1,.term_page h2,.term_page h3', {
  marginBottom: '2rem'
})

globalStyle('h1,h2,h3,h4', {
  textTransform: 'capitalize',
  lineHeight: '1.25',
  marginBottom: '0.75rem',
  fontWeight: '400',
  margin: '0',
  padding: '0',
});

globalStyle('h1', {
  fontSize: '2rem',
  fontWeight: '700',
});
globalStyle('h2', {
  fontSize: '1.5rem',
  fontWeight: '700',
});
globalStyle('h3', {
  fontSize: '1.25rem',
  fontWeight: '700',
});
globalStyle('h4', {
  fontSize: '0.875rem',
});
globalStyle('p', {
  fontSize: "1rem",
  marginBottom: '1.25rem',
  lineHeight: '2.2rem',
  color: '#000000',
});

globalStyle('li', {
  fontSize: "1rem",
  lineHeight: '2.2rem',
  color: '#000000',
});


globalStyle('body', {
  color: '#333',
  '@media': {
    'screen and (min-width: 800px)': {
      fontSize: '1rem',
    }
  }
});

globalStyle('.root-wrap', {
  minHeight: '100%',
  scrollPaddingTop: '100px',
  display: 'flex',
  flexDirection: 'column',
})

globalStyle('main', {
  flex: 1,
});

globalStyle('header,footer', {
  width: '100%',
});

globalStyle('section', {
  marginBottom: '72px',
  position: 'relative',
});

globalStyle('.inner', {
  width: 'calc(100% - 2rem)',
  maxWidth: '1080px',
  margin: '0 auto',
})

globalStyle('.description p', {
  lineHeight: '1.7rem',
});

globalStyle('.product-recommendation', {
  position: 'relative',
  marginBottom: '2rem',
  display: 'inline-block',
  padding: '0 55px',
  width: '100%',
  textAlign: 'center',
  fontSize: '1.75rem',
})

globalStyle('.product-recommendation:before', {
  content: '',
  position: 'absolute',
  top: '50%',
  display: 'inline-block',
  width: '20%',
  '@media': {
    'screen and (min-width: 800px)': {
      width: '40%'
    }
  },
  height: '1px',
  backgroundColor: '#D9D9D9',
  left: 0,
})

globalStyle('.product-recommendation:after', {
  content: '',
  position: 'absolute',
  top: '50%',
  display: 'inline-block',
  width: '20%',
  '@media': {
    'screen and (min-width: 800px)': {
      width: '40%'
    }
  },
  height: '1px',
  backgroundColor: '#D9D9D9',
  right: 0,
})

globalStyle('.breadcrumb li:last-child:after', {
  content: '',
});

globalStyle('.breadcrumb li a', {
  textDecoration: 'none',
  color: 'gray',
})

globalStyle('.breadcrumb li:first-child a:before', {
  content: '>',
  fontWeight: 'normal',
  fontSize: '1.1em',
  color: '#2e7fea',
})

globalStyle('.breadcrumb li a:hover', {
  textDecoration: 'underline',
})

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: "blue"
  },
  font: {
    body: "arial"
  }
});
