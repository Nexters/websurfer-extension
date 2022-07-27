import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      red: string;
      yellow: string;
      green: string;
      black: string;
      white: string;
      'gray-08': string;
      'gray-07': string;
      'gray-06': string;
      'gray-05': string;
      'gray-04': string;
      'gray-03': string;
      'gray-02': string;
      'gray-01': string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    fontWeight: {
      bold: number;
      regular: number;
    };
    lineHeight: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    spacing: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    };
  }
}
