import type { Meta, StoryObj } from '@storybook/react';

import { Project } from './Project';

const meta = {
  title: 'Project',
  component: Project,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Project Number 1',
    skills: ['Java', 'MySQL', 'Test'],
    src: 'src/assets/images/thumbnail-project-1-large.webp',
    alt: 'test alt'
  },
};