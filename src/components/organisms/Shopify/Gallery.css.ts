import { style } from '@vanilla-extract/css';

export const divGalleryWrap: string = style({
    marginBottom: "1rem",
});

export const divGalleryItem: string = style({
    marginBottom: "1rem",
});

export const divSubGalleryWrap: string = style({
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
});

export const divSubGalleryItem: string = style({
    cursor: "pointer",
    border: "solid 1px #ccc",
});
