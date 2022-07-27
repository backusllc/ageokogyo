import { style, createTheme } from '@vanilla-extract/css';

export const [whiteMode, vars] = createTheme({
  color: {
    background: 'white',
  },
});
// Theme variant - note this part does not use the array syntax
export const darkMode = createTheme(vars, {
  color: {
    background: 'black',
  },
});
// Consuming the theme
export const theme = style({
  backgroundColor: vars.color.background,
  position: 'relative',
});
