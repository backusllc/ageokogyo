import { style } from '@vanilla-extract/css'

export const header: string = style({
	position: 'absolute',
	zIndex: '99999',
	top: '0',
	left: '0',
	width: '100%',
	height: '75px',
})

export const headerBar: string = style({
	display: 'flex',
	position: 'absolute',
	top: '15px',
	right: '15px',
	left: '15px',
	borderRadius: '45px 45px',
	height: '45px',
	transition: 'boxShadow 0.5s',
	background: '#fff',
	alignItems: 'center',
	justifyContent: 'space-between',
	// '@media': {
	// 	'screen and (min-width: 1032px)': {
	// 		top: '20px',
	// 		right: '20px',
	// 		left: '20px',
	// 		padding: '0 14px',
	// 		height: '72px',
	// 		justifyContent: 'space-between',
	// 	}
	// }
})

export const logo: string = style({
	display: 'block',
	overflow: 'hidden',
	width: '140px',
	height: '45px',
	background: 'url(https://d2utiq8et4vl56.cloudfront.net/files/user/img/common/logo.svg) no-repeat center center',
	backgroundSize: 'contain',
	whiteSpace: 'nowrap',
	textIndent: '100%',
	fontSize: '0',
	// '@media': {
	// 	'screen and (min-width: 1032px)': {
	// 		marginLeft: '8px',
	// 		width: '190px',
	// 		height: '72px',
	// 	}
	// }
})


export const ul: string = style({
	display: 'flex',
	paddingRight: '24px',
	paddingBottom: '1px',
	justifyContent: 'flex-start',
	alignItems: 'center',
})

export const li: string = style({
	cursor: 'pointer',
	fontSize: '1.4rem',
	fontWeight: 'bold',

	'selectors': {
		'&:not(:first-child)': {
			marginLeft: '36px',
		}
	}
})
