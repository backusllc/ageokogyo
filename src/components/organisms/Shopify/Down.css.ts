import { style } from '@vanilla-extract/css';

export const icon: string = style({
  transition: 'transform 280ms cubic-bezier(0, 1, 0, 1)',
});

export const open: string = style({
  transform: 'rotate(.5turn)',
});
