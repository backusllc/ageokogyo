import { style } from '@vanilla-extract/css';

export const section: string = style({
    position: 'relative',
    margin: '0 auto',
})

export const overlayDiv: string = style({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '1',
    backgroundColor: 'rgba(10,108,132,.3)'
})

export const gridDiv: string = style({
    height: '100%',
})

export const imageDiv: string = style({
    position: 'absolute',
    width: '100%',
    height: '100%',
})

export const image: string = style({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

export const textDiv: string = style({
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: '3',
})
