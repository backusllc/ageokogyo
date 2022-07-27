import { style } from "@vanilla-extract/css";

export const grid = style({
    maxWidth: '1080px',
    display: 'grid',
    margin: '3.5rem auto',
    gap: '1rem',
})

export const svg = style({
    position: "absolute",
    top: "50%",
    right: "0",
    width: "20px",
    transform: "translate(0, -50%)",
})

export const titleDiv = style({
    position: "relative",
    width: "100%",
})

export const itemDiv: string = style({
    alignItems: "center",
    gap: "2rem",
})

export const title: string = style({
    fontSize: "1rem",
    margin: "0",
})
