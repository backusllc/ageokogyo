import { globalStyle, style } from "@vanilla-extract/css";

export const div: string = style({
    margin: '0 auto',
})

globalStyle('.slick-track', {
    width: '100%',
    // animation: `3.5s infinite ${show}`,
    // zIndex: 999,
})
