import { style } from '@vanilla-extract/css';

export const inner: string = style({
  maxWidth: '1080px',
  margin: '0 auto',
  width: '100%',
})

export const details: string = style({
  margin: '0 auto',
})

export const p: string = style({
  paddingBottom: '30px',
  borderBottom: '1px dotted #ccc',
  margin: '0 auto',
  textAlign: 'center',
})

export const flex: string = style({
  display: 'flex',
  alignItems: 'center',
})

export const img: string = style({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
})
