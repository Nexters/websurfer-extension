import { Theme } from '@emotion/react';

const color = {
  primary: '#00C2FF',
  red: '#FC3E39',
  yellow: '#FEBF4E',
  green: '#53D76A',
  black: '#000',
  white: '#FFF',
  'gray-08': '#171717',
  'gray-07': '#333333',
  'gray-06': '#555555',
  'gray-05': '#8B8B8B',
  'gray-04': '#C1C1C1',
  'gray-03': '#ECECEC',
  'gray-02': '#F5F4F3',
  'gray-01': '#FBFBFB',
};

const fontSize = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '36px',
  '4xl': '40px',
};

const fontWeight = {
  bold: 700,
  regular: 400,
};

const lineHeight = {
  xs: '18px',
  s: '20px',
  m: '22px',
  l: '24px',
  xl: '30px',
  '2xl': '34px',
  '3xl': '42px',
  '4xl': '46px',
  '5xl': '52px',
};

const theme: Theme = {
  color: {
    primary: color.primary,
    red: color.red,
    yellow: color.yellow,
    green: color.green,
    black: color.black,
    white: color.white,
    'gray-08': color['gray-08'],
    'gray-07': color['gray-07'],
    'gray-06': color['gray-06'],
    'gray-05': color['gray-05'],
    'gray-04': color['gray-04'],
    'gray-03': color['gray-03'],
    'gray-02': color['gray-02'],
    'gray-01': color['gray-01'],
  },
  fontSize: {
    xs: fontSize.xs,
    s: fontSize.s,
    m: fontSize.m,
    l: fontSize.l,
    xl: fontSize.xl,
    '2xl': fontSize['2xl'],
    '3xl': fontSize['3xl'],
    '4xl': fontSize['4xl'],
  },
  fontWeight: {
    bold: fontWeight.bold,
    regular: fontWeight.regular,
  },
  lineHeight: {
    xs: lineHeight.xs,
    s: lineHeight.s,
    m: lineHeight.m,
    l: lineHeight.l,
    xl: lineHeight.xl,
    '2xl': lineHeight['2xl'],
    '3xl': lineHeight['3xl'],
    '4xl': lineHeight['4xl'],
    '5xl': lineHeight['5xl'],
  },
};

export default theme;
