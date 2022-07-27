import { globalStyle, style } from '@vanilla-extract/css';

export const navLinks: string = style({
    display: "none",
    '@media': {
        'screen and (min-width: 800px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            maxWidth: '500px',
        }
    }
})

export const li: string = style({
    '@media': {
        'screen and (min-width: 800px)': {
            padding: '1rem 0',
            position: 'relative',
        }
    },
    background: 'transparent',
    border: 'transparent',
    fontSize: '1rem',
    letterSpacing: '2px',
    fontWeight: '500',
    padding: '10px 20px',
    width: '100%',
    textTransform: 'capitalize',
    position: 'relative',
})

export const button: string = style({
    // color: var(--clr - white)',
    background: 'transparent',
    border: 'transparent',
    fontSize: '1rem',
    letterSpacing: '2px',
    fontWeight: '500',
    padding: '10px 20px',
    width: '100%',
    textTransform: 'capitalize',
    position: 'relative',
})

export const clink: string = style({
    position: 'absolute',
    top: '4rem',
    left: '50%',
    transform: 'translateX(-50%)',
    visibility: 'hidden',
    padding: '2rem',
    background: 'white',
    // border - radius: 'var(--radius)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem 2rem',
    gridGap: '1rem 4rem',
})

export const a: string = style({

})

// export const icon: string = style({
//     color: '#88add2',
// })

export const caret: string = style({
    display: 'block',
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid white',
    position: 'absolute',
    top: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
})

globalStyle('li:hover .clink', {
    visibility: 'visible',
})

globalStyle('.clink a', {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '0.5rem',
    gridGap: '0.5rem',
    alignItems: 'center',
    color: '#0a2540',
    textTransform: 'capitalize',
    fontWeight: '700',
})
