import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {},
};


export const decorators = [
  (Story) => {
    return (
      <div id='storybook-containers' style={{
        backgroundColor: 'black',
        width: '100%',
        maxWidth: '800px',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <Story />
      </div>
    )
  }
];


export default preview;
