import { style } from '@vanilla-extract/css';

export const grid: string = style({
    display: 'grid',
    gap: '1rem',
    gridGap: '1rem',
    gridTemplateColumns: '1fr 1fr',
})

export const details: string = style({
    margin: '0 auto',
})

export const p: string = style({
    paddingBottom: '30px',
    borderBottom: '1px dotted #ccc',
    margin: '0 auto',
    textAlign: 'center',
})

export const ul: string = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    margin: '0 auto',
    // width: '100vw',
    // height: '100vw',
    gap: '1rem',
    gridGap: '1rem',
    gridTemplateRows: 'repeat(auto-fit, minmax(10em, 1fr))',
    // '@media': {
    //     'screen and (min-width: 768px)': {
    //         gridTemplateColumns: '1fr 1fr 1fr',
    //         gridTemplateRows: '1fr 1fr 1fr',
    //         gridAutoRows: '250px',
    //     }
    // }
})
