import { style } from '@vanilla-extract/css';

export const navLinks: string = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const li: string = style({
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '1rem 1.5rem 1rem 0',
      position: 'relative',
    },
    // selectors: {
    //   ':last-child': {
    //     paddingRight: '0',
    //   },
    // },
  },
  background: 'transparent',
  border: 'transparent',
  fontSize: '1rem',
  letterSpacing: '2px',
  fontWeight: '500',
  padding: '10px 20px',
  width: '100%',
  textTransform: 'capitalize',
  position: 'relative',
  whiteSpace: 'nowrap',
});
