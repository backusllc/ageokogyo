import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    //remで計算
    width: vars.lengthEachByRem,
    height: vars.lengthEachByRem,
    fontSize: vars.lengthEachByRem,
    paddingTop: vars.lengthEachByRem,
    paddingRight: vars.lengthEachByRem,
    paddingBottom: vars.lengthEachByRem,
    paddingLeft: vars.lengthEachByRem,
    marginTop: vars.lengthEachByRem,
    marginRight: vars.lengthEachByRem,
    marginBottom: vars.lengthEachByRem,
    marginLeft: vars.lengthEachByRem,
    //emで計算
    letterSpacing: vars.lengthEachByem,
    lineHeight: vars.lengthEachByem,
    gap: vars.lengthEachByem,
    //%で計算
    top: vars.percentage,
    left: vars.percentage,

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
