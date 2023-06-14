import type { Meta, StoryObj } from '@storybook/react';
import { SkillData } from '../data/skills';

import { Skills } from './Skills';

const meta = {
  title: 'Skills',
  component: Skills,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...SkillData
  },
};