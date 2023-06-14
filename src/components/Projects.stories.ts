import type { Meta, StoryObj } from '@storybook/react';
import { ProjectData } from '../data/projects';

import { Projects } from './Projects';

const meta = {
  title: 'Projects',
  component: Projects,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...ProjectData[0]
  },
};