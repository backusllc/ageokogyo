import { style } from '@vanilla-extract/css';

export const table: string = style({
  borderBottom: '1px solid #dae0e0',
  width: '100%',
  borderCollapse: 'collapse',
  wordWrap: 'break-word',
  borderSpacing: '0',
  margin: '0 auto',
})

export const th: string = style({
  borderTop: '1px solid #dae0e0',
  borderBottom: '1px solid #dae0e0',
  display: 'block',
  width: '100%',
  backgroundColor: '#f7f7f7',
  fontSize: '14px',
  textAlign: 'left',
  padding: '12px 0',
})

export const td: string = style({
  display: 'block',
  width: '100%',
  fontSize: '14px',
  textAlign: 'left',
  padding: '12px 0',
})
