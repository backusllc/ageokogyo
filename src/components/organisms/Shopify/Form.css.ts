import { style } from '@vanilla-extract/css';

export const formDiv: string = style({
  marginBottom: '1rem',
})

export const selectItems: string = style({
  width: '100%',
  fontSize: '1rem',
  padding: '0.5rem',
})

export const label: string = style({
  display: 'block',
  width: '100%',
  fontSize: '1rem',
  marginBottom: '0.25rem',
});

export const abbr: string = style({
  color: 'red',
  textDecorationStyle: 'unset',
})

export const input: string = style({
  fontSize: '1rem',
  padding: '1rem',
  width: '100%',
})

export const link: string = style({
  fontSize: '1rem',
  display: 'inline',
  textDecoration: 'underline',
})

export const div: string = style({
  textAlign: "center",
  marginBottom: '3rem',
});

export const button: string = style({
  display: 'inline-flex',
  color: 'white',
  padding: '1.5rem 7rem',
  backgroundColor: 'rgb(0, 118, 45)',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '35px',
  fontSize: '1.25rem',
  border: 'none',
})
