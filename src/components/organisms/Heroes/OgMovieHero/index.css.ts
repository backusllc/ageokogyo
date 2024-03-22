import { globalStyle, style } from '@vanilla-extract/css';

export const section: string = style({
    // height: '100vw',
    // marginTop: '-5rem',
    position: 'relative',
})


export const img: string = style({
    height: '100%',
})

export const info: string = style({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
})

export const article: string = style({
    width: '85vw',
    maxWidth: '800px',
    color: 'white',
    textAlign: 'center',
})

export const h1: string = style({
    textTransform: 'uppercase',
    fontWeight: '500',
    lineHeight: '1.25',
    margin: '2rem 0 3rem 0',
    letterSpacing: '3px',
})

export const h3: string = style({
    fontWeight: '400',
    fontFamily: "'Caveat', cursive",
})

globalStyle('section article a', {
    background: 'transparent',
    border: '2px solid white',
    padding: '0.25rem 1rem',
    textTransform: 'capitalize',
    letterSpacing: '5px',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: '1.25rem',
            padding: '0.5rem 1.25rem',
        }
    }
})

globalStyle('section article a:hover', {
    background: 'white',
    color: '#333',
})
