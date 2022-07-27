import { style } from '@vanilla-extract/css';

export const divFlex: string = style({
    display: "flex",
    justifyContent: 'center',
    gap: "1rem",
    flexWrap: "wrap",
    '@media': {
        'screen and (min-width: 800px)': {
            flexWrap: "nowrap",
        }
    },
});

export const img: string = style({
    border: "1px solid rgb(204, 204, 204)",
});

export const p: string = style({
    margin: 0,
    minHeight: '65px',
});

export const price: string = style({
    color: '#E35700',
    fontWeight: '700',
});

