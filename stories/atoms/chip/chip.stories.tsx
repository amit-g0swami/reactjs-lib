import { Chip } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
  title: 'atoms/Chip',
  component: Chip,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'neutral']
      }
    }
  }
}

type Story = StoryObj<typeof Chip>
export default meta

export const DefaultChip: Story = {
  args: {
    label: 'Sample Chip',
    color: 'neutral'
  }
}

export const ChipWithDelete: Story = {
  args: {
    label: 'Deletable Chip',
    color: 'primary',
    onDelete: () => alert('Delete clicked!')
  }
}

export const ClickableChip: Story = {
  args: {
    label: 'Clickable Chip',
    color: 'secondary',
    onChipClick: () => alert('Chip clicked!')
  }
}
