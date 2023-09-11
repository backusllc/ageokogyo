import { style } from '@vanilla-extract/css';

export const h1: string = style({
    marginBottom: '1rem',
});

export const button: string = style({
    backgroundColor: "#E35700",
    border: "none",
    padding: "1rem",
    color: "white",
    width: "100%",
    ':disabled': {
        pointerEvents: 'none',
        border: '1px solid #999999',
        backgroundColor: '#cccccc',
        color: '#666666',
    }
});

