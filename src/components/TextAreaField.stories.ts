import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaField } from './TextAreaField';

const meta = {
  title: 'TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'MESSAGE',
    value: ''
  },
};