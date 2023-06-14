import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'NAME',
    value: '',
    hasValidationError: false
  },
};

export const ValidationError: Story = {
  args: {
    placeholder: 'NAME',
    value: 'asdfadsf',
    hasValidationError: true
  },
};