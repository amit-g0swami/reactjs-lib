import React from 'react'
import { Select } from '../../../components' // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Select> = {
  title: 'Form/Input/Select',
  component: Select
}

type Story = StoryObj<typeof Select>
export default meta

export const DefaultSelect: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    placeholder: 'Select an option'
  },
  render: (args) => (
    <div className="p-4">
      <Select {...args} />
    </div>
  )
}

export const DisabledSelect: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    placeholder: 'Select an option',
    disabled: true
  },
  render: (args) => (
    <div className="p-4">
      <Select {...args} />
    </div>
  )
}
