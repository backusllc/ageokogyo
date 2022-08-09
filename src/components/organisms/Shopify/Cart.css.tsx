import { style } from '@vanilla-extract/css';

export const h1: string = style({
    marginBottom: '1rem',
});

export const h2: string = style({
    fontSize: '1.25rem',
    display: 'inline-block',
    fontWeight: '400',
})

export const th: string = style({
    fontSize: '0.75rem',
    fontWeight: '400',
    color: '#333',
});

export const totalWrap: string = style({
    margin: '1rem 0',
    textAlign: 'right',
    float: 'right',
});

export const empltyProductWrap: string = style({
    textAlign: 'center',
    marginTop: '3rem',
});

export const empltyProductText: string = style({
    marginBottom: '3rem',
    fontSize: '2rem',
});


export const p: string = style({
    margin: '0',
    display: 'inline-block',
    fontSize: '1.25rem',
    marginLeft: '1rem',
    fontWeight: '400',
});

export const price: string = style({
    color: '#E35700',
    fontWeight: '700',
});

export const small: string = style({
    fontSize: '1rem',
    display: 'block'
})

export const attentionSmall: string = style({
    fontSize: '1rem',
    display: 'block'
})

export const a: string = style({
    backgroundColor: 'rgb(18,18,18)',
    color: "#fff",
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.25rem',
    marginTop: '1rem',
})
