import { Theme } from '@emotion/react';

const color = {
  primary: '#3EA2FF',
  secondaryG: '#3DE5E5',
  secondaryY: '#FFDE31',
  secondaryB: '#EEF4FF',
  red: '#FC3E39',
  yellow: '#FEBF4E',
  green: '#53D76A',
  black: '#000',
  white: '#FFF',
  pink: '#FDCCBE',
  bgColor: '#FAFAFA',
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
  '5xl': '48px',
  '6xl': '56px',
  '7xl': '64px',
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
  color,
  fontSize,
  fontWeight,
  lineHeight,
};

export default theme;
