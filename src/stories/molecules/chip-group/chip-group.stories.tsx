import { ChipGroup } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ChipGroup> = {
  title: 'molecules/ChipGroup',
  component: ChipGroup,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'neutral']
      }
    }
  }
}

type Story = StoryObj<typeof ChipGroup>
export default meta

export const DefaultChipGroup: Story = {
  args: {
    chips: ['primary', 'secondary', 'tertiary', 'neutral'],
    color: 'neutral'
  }
}

export const DeletableChipGroup: Story = {
  args: {
    chips: ['Chip A', 'Chip B', 'Chip C'],
    color: 'primary',
    onDelete: (chip: string) => alert(`Delete clicked for ${chip}!`)
  }
}

export const ClickableChipGroup: Story = {
  args: {
    chips: ['Chip X', 'Chip Y', 'Chip Z'],
    color: 'secondary',
    onClick: (chip: string) => alert(`Clicked on ${chip}!`)
  }
}
