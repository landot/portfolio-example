import type { Meta, StoryObj } from '@storybook/react';

import { Intro } from './Intro';

const meta = {
  title: 'Intro',
  component: Intro,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};