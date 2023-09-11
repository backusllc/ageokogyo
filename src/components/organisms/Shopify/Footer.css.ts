import { style } from '@vanilla-extract/css';

export const footer: string = style({
    // position: 'absolute',
    // bottom: '0',
    // left: '0',
    // right: '0',
});

export const footerInner: string = style({
    backgroundColor: "#E6E6E6",
    paddingTop: '1rem',
    paddingBottom: '1rem'
});

export const copyright: string = style({
    backgroundColor: "#555555",
    color: "#fff",
    height: '30px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
