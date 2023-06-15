import type { Meta, StoryObj } from '@storybook/react';

import { NavigationMenu } from './NavigationMenu';

const meta = {
  title: 'NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    location: 'header'
  },
};