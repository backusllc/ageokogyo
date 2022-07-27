import { style } from '@vanilla-extract/css'

export const btn: string = style({
    border: 'none',
    backgroundColor: 'transparent',
})

export const btn1: string = style({
    padding: '1rem 4rem',
    color: '#61677C',
    fontWeight: 'bold',
    boxShadow: '-5px -5px 20px #fff,  5px 5px 20px #BABECC',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    // borderRadius: '50px',
    textDecoration: 'none',
    ':hover': {
        boxShadow: '-2px -2px 5px #fff, 2px 2px 5px #BABECC',
    }
})

export const btn2: string = style({
    padding: '1rem 4rem',
    // borderRadius: '50px',
    transition: 'all 0.2s ease-in-out',
    background: 'linear-gradient(145deg, #fff, #f0f0f0)',
    boxShadow: '5px 5px 10px #a8a8a8,-5px -5px 10px #ffffff',
    ':hover': {
        boxShadow: '-2px -2px 5px #fff, 2px 2px 5px #BABECC',
    }
})

export const btn3: string = style({
    padding: '1rem 4rem',
    // borderRadius: '50px',
    background: 'linear-gradient(145deg, #fff, #f0f0f0)',
    boxShadow: '5px 5px 10px #a8a8a8,-5px -5px 10px #ffffff;',
})

export const btn4: string = style({
    padding: '1rem 4rem',
    // borderRadius: '50px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: 'inset 5px 5px 10px #a8a8a8,inset -5px -5px 10px #ffffff',
})

export const btn10: string = style({
    color: '#000',
    backgroundColor: '#fff100',
    borderBottom: '5px solid #ccc100',
    // borderRadius: '0.5rem',
    padding: '1rem 4rem',
    ':hover': {
        marginTop: '3px',
        background: '#fff20a',
        borderBottom: '2px solid #ccc100',
    }
})

export const btn20: string = style({
    color: '#060605',
    border: 'solid 1px #000',
    // borderRadius: '4px',
    ':hover': {
        marginTop: '3px',
        background: '#fff20a',
        borderBottom: '2px solid #ccc100',
    }
})



// import { recipe } from '@vanilla-extract/recipes';

// export const a = recipe({
//   base: {
//     padding: '1rem 4rem',
//     borderRadius: '50px',
//     background: '#EBECF0',
//     boxShadow: '5px 5px 20px #c8c9cc,-5px -5px 20px #ffffff',
//   },

//   variants: {
//     color: {
//       neutral: { background: 'whitesmoke' },
//       brand: { background: 'blueviolet' },
//       accent: { background: 'slateblue' }
//     },
//     size: {
//       small: { padding: 12 },
//       medium: { padding: 16 },
//       large: { padding: 24 }
//     },
//     rounded: {
//       true: { borderRadius: 999 }
//     }
//   },

//   // Applied when multiple variants are set at once
//   compoundVariants: [
//     {
//       variants: {
//         color: 'neutral',
//         size: 'large'
//       },
//       style: {
//         background: 'ghostwhite'
//       }
//     }
//   ],

//   defaultVariants: {
//     color: 'accent',
//     size: 'medium'
//   }
// });
