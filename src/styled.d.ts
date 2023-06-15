import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
     viewports: {
        mobile: string;
        tablet: string;
     }
     colors: {
        black: string;
        lightBlack: string;
        gray: string;
        white: string;
        greenAccent: string;
        redAccent: string;
     }
  }
}