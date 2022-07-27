import { style } from '@vanilla-extract/css';

export const ul: string = style({
    display: "flex",
})

export const a: string = style({
    padding: "0 20px",
})

export const inner: string = style({
    maxWidth: "1480px",
    margin: "0 auto",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})


export const header = style({
    // marginLeft: "calc((50% - 1600px / 2) + 230px)",
    // padding: "50px 0 50px 70px",
})
