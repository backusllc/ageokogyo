import { style } from '@vanilla-extract/css';

export const div: string = style({
    margin: '0 auto',
})

export const nav: string = style({
    position: "relative",
    background: "transparent",
    zIndex: "1",
    height: "5rem",
    display: "flex",
    alignItems: "center",
})

export const navCenter: string = style({
    width: '100%',
    margin: "0 auto",
    display: 'flex',
    '@media': {
        'screen and (min-width: 768px)': {
            alignItems: "center",
        }
    }
})

export const navHeader: string = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})
