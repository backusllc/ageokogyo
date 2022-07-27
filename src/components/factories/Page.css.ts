import { style } from '@vanilla-extract/css'

export const wrapDiv: string = style({
  position: 'relative',
  width: '100%',
  // 'selectors': {
  //   '&::before': {
  //     content: "",
  //     display: 'block',
  //     paddingTop: '56.25%',
  //   }
  // }
})
