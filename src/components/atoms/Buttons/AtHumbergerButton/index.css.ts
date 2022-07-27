import { style } from '@vanilla-extract/css'

export const toggleBtn: string = style({
    width: "3.5rem",
    height: "2.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    borderRadius: "2rem",
    border: "transparent",
    color: "var(--clr-white)",
    background: "var(--clr-primary-5)",
    cursor: "pointer",
    transition: "var(--transition)",
    '@media': {
        'screen and (min-width: 800px)': {
            display: 'none',
        }
    }
})

export const svg: string = style({
    fontSize: '2rem',
})
