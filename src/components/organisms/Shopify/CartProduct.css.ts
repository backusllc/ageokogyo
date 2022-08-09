import { style } from '@vanilla-extract/css';

export const imageTd: string = style({
    padding: '1rem 0.25rem',
    width: '40%',
    '@media': {
        'screen and (min-width: 800px)': {
            width: '10%',
        },
    }
});

export const nameTd: string = style({
    padding: '1rem 0.25rem',
    width: '40%',
    '@media': {
        'screen and (min-width: 800px)': {
            width: '50%',
        },
    }
});

export const ammountTd: string = style({
    padding: '1rem 0.25rem',
    textAlign: 'center',
    width: '10%',
    '@media': {
        'screen and (min-width: 800px)': {
            width: '20%',
        },
    }
});

export const totalTd: string = style({
    padding: '1rem 0.25rem',
    textAlign: 'center',
    width: '10%',
    '@media': {
        'screen and (min-width: 800px)': {
            width: '20%',
        },
    }
});
