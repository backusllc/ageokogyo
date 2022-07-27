import { style, createTheme } from '@vanilla-extract/css';

export const [whiteMode, vars] = createTheme({
  color: {
    background: 'white',
  },
  //   lengths: {
  //     mediumGap: '30px',
  //   },
});
// Theme variant - note this part does not use the array syntax
export const darkMode = createTheme(vars, {
  color: {
    // text: 'hsl(210deg,60%,80%)',
    background: 'black',
  },
  //   lengths: {
  //     mediumGap: '30px',
  //   },
});
// Consuming the theme
export const theme = style({
  backgroundColor: vars.color.background,
  position: 'relative',
  //   color: vars.color.text,
  //   fontFamily: 'helvetica, Sans-Serif',
  //   padding: vars.lengths.mediumGap,
  //   borderRadius: 20,
});
