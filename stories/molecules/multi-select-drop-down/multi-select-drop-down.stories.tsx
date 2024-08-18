import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelectDropdown } from '../../../src/components'

const meta: Meta<typeof MultiSelectDropdown> = {
  title: 'Form/Input/MultiSelectDropdown',
  component: MultiSelectDropdown
}

type Story = StoryObj<typeof MultiSelectDropdown>
export default meta

export const MultiSelectDropdownExample: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    placeholder: 'Select an option',
    selectedValues: ['option1', 'option2']
  },
  render: (args) => (
    <div className="p-4">
      <MultiSelectDropdown {...args} />
    </div>
  )
}
