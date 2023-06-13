import type { Meta, StoryObj } from '@storybook/react';

import { Skill } from './Skill';

const meta = {
  title: 'Skill',
  component: Skill,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Java',
    yearsOfExperience: 1
  },
};

export const MultipleYearsExperience: Story = {
    args: {
      name: 'Accessibility',
      yearsOfExperience: 2
    },
  };