import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {},
};


export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <div id='storybook-containers' style={{
          backgroundColor: 'black',
          width: '100%',
          maxWidth: '1200px',
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  }
];


export default preview;
