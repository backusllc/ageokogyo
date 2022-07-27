import { style, globalStyle } from '@vanilla-extract/css'

export const tileLayout: string = style({
    marginTop: '2rem',
    display: 'grid',
    margin: '0 auto',
    gap: '1rem',
    gridGap: '1rem',
    gridTemplateRows: '300px 300px',
    gridAutoRows: '300px',
    '@media': {
        'screen and (min-width: 800px)': {
            gridTemplateColumns: '1fr 1fr',
        },
        'screen and (min-width: 1200px)': {
            display: 'grid',
            gridTemplateAreas: `
              'a b b'
              'a c c'
              'd d d'`,
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '250px 250px',
            gridAutoRows: '250px',
        }
    }
})

globalStyle('.div0', {
    position: 'relative',
    '@media': {
        'screen and (min-width: 1200px)': {
            gridArea: 'a',
        }
    }
})

globalStyle('.div1', {
    position: 'relative',
    '@media': {
        'screen and (min-width: 1200px)': {
            gridArea: 'b',
        }
    }
})

globalStyle('.div2', {
    position: 'relative',
    '@media': {
        'screen and (min-width: 1200px)': {
            gridArea: 'c',
        }
    }
})

globalStyle('.div3', {
    position: 'relative',
    '@media': {
        'screen and (min-width: 1200px)': {
            gridArea: 'd',
        }
    }
})

export const img: string = style({
    bottom: '0',
    height: '100%',
    left: '0',
    margin: '0',
    maxWidth: 'none',
    padding: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '100%',
    objectFit: 'cover',
})
