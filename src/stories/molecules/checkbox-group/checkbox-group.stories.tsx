import React from 'react'
import { CheckboxGroup } from '../../../components' // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Form/Input/CheckboxGroup',
  component: CheckboxGroup
}

type Story = StoryObj<typeof CheckboxGroup>
export default meta

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]

export const DefaultCheckboxGroup: Story = {
  args: {
    options: options
  },
  render: (args) => (
    <div className="p-4">
      <CheckboxGroup {...args} />
    </div>
  )
}

export const DisabledCheckboxGroup: Story = {
  args: {
    options: options,
    disabled: true
  },
  render: (args) => (
    <div className="p-4">
      <CheckboxGroup {...args} />
    </div>
  )
}
