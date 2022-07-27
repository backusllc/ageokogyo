import { style } from '@vanilla-extract/css';

export const div: string = style({
    textAlign: "center",
    marginBottom: '3rem',
});

export const a: string = style({
    display: 'inline-flex',
    color: 'white',
    padding: '1.5rem 7rem',
    backgroundColor: 'rgb(0, 118, 45)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '35px',
    fontSize: '1.25rem',
})
