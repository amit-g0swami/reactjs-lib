import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '../../../components'

const meta: Meta<typeof Dropdown> = {
  title: 'Form/Input/Dropdown',
  component: Dropdown
}

type Story = StoryObj<typeof Dropdown>
export default meta

export const SearchableDropdown: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
      { value: 'option7', label: 'Option 7' },
      { value: 'option8', label: 'Option 8' },
      { value: 'option9', label: 'Option 9' },
      { value: 'option10', label: 'Option 10' },
      { value: 'option11', label: 'Option 11' }
    ],
    selectedValue: 'option1',
    isSearchable: true,
    placeholder: 'Select an option',
    isRadio: false
  },
  render: (args) => (
    <div className="p-4">
      <Dropdown {...args} />
    </div>
  )
}

export const UnsearchableDropdown: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
      { value: 'option7', label: 'Option 7' },
      { value: 'option8', label: 'Option 8' },
      { value: 'option9', label: 'Option 9' },
      { value: 'option10', label: 'Option 10' },
      { value: 'option11', label: 'Option 11' }
    ],
    selectedValue: 'option1',
    isSearchable: false,
    placeholder: 'Select an option',
    isRadio: false
  },
  render: (args) => (
    <div className="p-4">
      <Dropdown {...args} />
    </div>
  )
}

export const GroupedDropdown: Story = {
  args: {
    options: [
      {
        label: 'Group 1',
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]
      },
      {
        label: 'Group 2',
        options: [
          { value: 'option3', label: 'Option 3' },
          { value: 'option4', label: 'Option 4' },
          { value: 'option5', label: 'Option 5' }
        ]
      },
      {
        label: 'Group 3',
        options: [
          { value: 'option6', label: 'Option 6' },
          { value: 'option7', label: 'Option 7' },
          { value: 'option8', label: 'Option 8' },
          { value: 'option9', label: 'Option 9' },
          { value: 'option10', label: 'Option 10' },
          { value: 'option11', label: 'Option 11' }
        ]
      }
    ],
    selectedValue: 'option1',
    isSearchable: true,
    placeholder: 'Select an option',
    isRadio: true
  },
  render: (args) => (
    <div className="p-4">
      <Dropdown {...args} />
    </div>
  )
}
