import { style } from '@vanilla-extract/css';

export const breadcrumb: string = style({
    width: 'calc(100% - 2rem)',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: '0 auto 3rem auto',
})

export const li: string = style({
    display: 'flex',
    listStyle: 'none',
    fontWeight: 'bold',
    ':after': {
        content: '>',
        padding: '0 0.2em',
        color: '#707070',
    }
})

export const item: string = style({
    fontSize: '0.875rem',
    margin: '0 !important',
    marginRight: '0.5rem',
    color: '#707070',
    ':hover': {
        textDecoration: 'underline',
    }
})
