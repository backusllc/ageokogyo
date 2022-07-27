import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';
import { lengthEachByem } from './lengthEachByem.css';
import { lengthEachByRem } from './lengthEachByRem.css';
import { percentage } from './percentage.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    //remで計算
    width: lengthEachByRem.lengthEachByRem,
    height: lengthEachByRem.lengthEachByRem,
    fontSize: lengthEachByRem.lengthEachByRem,
    paddingTop: lengthEachByRem.lengthEachByRem,
    paddingRight: lengthEachByRem.lengthEachByRem,
    paddingBottom: lengthEachByRem.lengthEachByRem,
    paddingLeft: lengthEachByRem.lengthEachByRem,
    marginTop: lengthEachByRem.lengthEachByRem,
    marginRight: lengthEachByRem.lengthEachByRem,
    marginBottom: lengthEachByRem.lengthEachByRem,
    marginLeft: lengthEachByRem.lengthEachByRem,
    //emで計算
    letterSpacing: lengthEachByem.lengthEachByem,
    lineHeight: lengthEachByem.lengthEachByem,
    gap: lengthEachByem.lengthEachByem,
    //%で計算
    top: percentage.percentage,
    left: percentage.percentage,

    display: ['none', 'flex', 'block'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],

    borderRadius: vars.borderRadius,
    maxWidth: vars.maxWidth,
    fontFamily: vars.fontFamily,
    textAlign: ['center', 'left', 'right'],
    gridTemplateColumns: vars.gridTemplateColumns,
    position: ['absolute', 'relative'],
    transform: ['translate(10px, 10px)'],
    fontWeight: vars.fontWeight,
    fontStyle: vars.fontStyle,
    textDecoration: vars.textDecoration,
  },
  shorthands: {
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
    square: ['width', 'height'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    // color: vars.color,
    // background: vars.color,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
