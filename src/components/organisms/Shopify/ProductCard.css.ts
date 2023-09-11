import { style } from '@vanilla-extract/css';

export const imgWrap: string = style({
    width: '100%',
    height: '100%',
    position: 'relative',
    border: "1px solid rgb(204, 204, 204)",
    paddingTop: '66%',
})

export const img: string = style({
    position: 'absolute',
    inset: '0',
    display: 'block',
    maxWidth: '100%',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
});

export const pCategory: string = style({
    fontSize: '1.25rem',
});

export const p: string = style({
    margin: 0,
});

export const price: string = style({
    color: '#E35700',
    fontWeight: '700',
});

