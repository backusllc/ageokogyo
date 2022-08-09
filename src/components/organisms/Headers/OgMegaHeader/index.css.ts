import { globalStyle, style } from '@vanilla-extract/css';

export const div: string = style({
    margin: '0 auto',
})

export const nav: string = style({
    position: "relative",
    background: "transparent",
    zIndex: "1",
    height: "5rem",
    display: "flex",
    alignItems: "center",
})

export const navCenter: string = style({
    width: '100%',
    margin: "0 auto",
    display: 'flex',
    '@media': {
        'screen and (min-width: 800px)': {
            alignItems: "center",
        }
    }
})

export const navHeader: string = style({
    width: 'calc(100% - 2rem)',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: '0 auto',
})

export const divHeader: string = style({
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
})

export const overlay: string = style({
    position: 'absolute',
    height: "100px",
    width: '100%',
    top: 0,
    backgroundColor: '#fff',
    zIndex: '999',
    opacity: .8,
})

export const header: string = style({
    position: 'sticky',
    top: '0',
    backgroundColor: '#FFFFFF',
    zIndex: '999',
    background: '#fff',
    margin: '0 auto',
})


export const liMenu: string = style({
    display: "flex",
    alignItems: "center",
    margin: "0 1rem",
    whiteSpace: "nowrap",
})

export const aMenu: string = style({
    fontSize: "16px",
})

export const svgMenu: string = style({
    width: "50px",
})

export const wrapMegaMenu: string = style({
    position: "absolute",
    zIndex: "100",
    background: "#707070",
    left: "0",
    right: "0",
    width: "100%",
    top: "100px",
    opacity: 1,
})

export const ulMegaMenu: string = style({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: "810px",
})

export const liMegaMenu: string = style({
    width: "25%",
    padding: "2.5em 1.9rem",

})

export const aMegaMenu: string = style({
    color: "#fff",
    fontSize: "15px",
})

export const quantityDiv: string = style({
    position: 'absolute',
    top: '18px',
    right: '30px',
    width: '15px',
    boxSizing: 'content-box',
    height: '15px',
    textAlign: 'center',
    color: '#E35700',
    fontSize: '10px',
    lineHeight: '15px',
    backgroundColor: '#fff',
    borderColor: '#E35700',
    borderImage: 'initial',
    borderRadius: '20px',
    border: 'solid 2px #E35700',
})

globalStyle('svg', {
    width: "50px",
})
