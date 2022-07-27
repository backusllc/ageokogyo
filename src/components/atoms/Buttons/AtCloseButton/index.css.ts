import { style } from '@vanilla-extract/css'

export const button: string = style({
    position: 'absolute',
    top: '1.5rem',
    left: '0.5rem',
    background: 'transparent',
    border: 'transparent',
    fontSize: '2rem',
    cursor: 'pointer',
})

export const icon: string = style({
    color: '#fff',
    fontSize: '2rem',
    ':hover': {
        color: '#fff',
    }
})
