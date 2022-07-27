import { style } from '@vanilla-extract/css'

export const wrap: string = style({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: '999',
    display: 'flex',
    '@media': {
        'screen and (min-width: 800px)': {
            display: 'none',
        }
    }
})

export const container: string = style({
    background: '#00762D',
    width: '80vw',
    position: 'relative',
})

export const links: string = style({

})

export const logoDiv: string = style({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '70px',
    marginRight: '2rem',
})

export const clink: string = style({
})

export const img: string = style({
    height: '30px',
})

export const a: string = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '0.75rem',
    alignItems: 'center',
    color: '#0a2540',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '1.2rem',
})

export const liMenu: string = style({
    borderTop: '0.1px solid #51A370',
    borderBottom: '0.1px solid #51A370',
})

export const aMenu: string = style({
    color: '#fff',
    fontSize: '1rem',
    padding: '1.5rem',
})

export const wrapMegaMenu: string = style({
    background: '#555555',

})

export const liMegaMenu: string = style({
    borderTop: '0.1px solid #777777',
    // borderBottom: '0.1px solid #fff',
})

export const aMegaMenu: string = style({
    color: '#fff',
    fontSize: '1rem',
    padding: '1.5rem',
})


