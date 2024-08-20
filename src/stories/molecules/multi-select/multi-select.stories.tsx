import React from 'react'
import { MultiSelect } from '../../../components' // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MultiSelect> = {
  title: 'Form/Input/MultiSelect',
  component: MultiSelect
}

type Story = StoryObj<typeof MultiSelect>
export default meta

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

export const DefaultMultiSelect: Story = {
  args: {
    options: options
    // placeholder: 'Select multiple options'
  },
  render: (args) => (
    <div className="p-4">
      <MultiSelect {...args} />
    </div>
  )
}

export const DisabledMultiSelect: Story = {
  args: {
    options: options,
    // placeholder: 'Select multiple options',
    disabled: true
  },
  render: (args) => (
    <div className="p-4">
      <MultiSelect {...args} />
    </div>
  )
}
