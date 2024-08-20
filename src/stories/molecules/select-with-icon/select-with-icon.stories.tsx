import React from 'react'
import { SelectWithIcon } from '../../../components' // Adjust the path as needed
import { AiOutlineArrowDown } from 'react-icons/ai' // Example icon from 'react-icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectWithIcon> = {
  title: 'Form/Input/SelectWithIcon',
  component: SelectWithIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['AiOutlineArrowDown'] // Add other icons as needed
      }
    }
  }
}

type Story = StoryObj<typeof SelectWithIcon>
export default meta

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

export const DefaultSelectWithIcon: Story = {
  args: {
    options: options,
    placeholder: 'Select an option',
    icon: AiOutlineArrowDown
  },
  render: (args) => (
    <div className="p-4">
      <SelectWithIcon {...args} />
    </div>
  )
}

export const DisabledSelectWithIcon: Story = {
  args: {
    options: options,
    placeholder: 'Select an option',
    disabled: true,
    icon: AiOutlineArrowDown
  },
  render: (args) => (
    <div className="p-4">
      <SelectWithIcon {...args} />
    </div>
  )
}
