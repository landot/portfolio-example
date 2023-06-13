import type { Meta, StoryObj } from '@storybook/react';

import { Contact } from './Contact';

const meta = {
  title: 'Contact',
  component: Contact,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};