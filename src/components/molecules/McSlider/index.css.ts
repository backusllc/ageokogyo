import { style, globalStyle, keyframes } from '@vanilla-extract/css'

const show = keyframes({
    '0%': { transform: ' translate(0,20px)', opacity: '0', },
    '100%': { transform: 'translate(0,0)', opacity: '1' }
});

export const h2: string = style({
    position: 'absolute',
    color: '#333',
    fontSize: '0.8rem',
    right: '20px',
    top: '10px',
    opacity: '0',
    '@media': {
        'screen and (min-width: 800px)': {
            fontSize: '1.4rem',
        }
    }
})

export const h3: string = style({
    position: 'absolute',
    color: '#333',
    fontSize: '0.6rem',
    right: '20px',
    top: '40px',
    opacity: '0',
    lineHeight: '1.5',
    '@media': {
        'screen and (min-width: 800px)': {
            fontSize: '0.8rem',
            top: '80px',
        }
    }
})

globalStyle('.slick-active h2', {
    animation: `3.5s infinite ${show}`,
    zIndex: 999,
})

globalStyle('.slick-active h3', {
    animation: `3.5s infinite ${show}`,
    zIndex: 999,
})
