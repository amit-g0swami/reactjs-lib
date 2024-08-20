import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../../../components'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Input/Checkbox',
  component: Checkbox
}

type Story = StoryObj<typeof Checkbox>
export default meta

export const UncheckedCheckbox: Story = {
  args: {
    checked: false
  },
  render: (args) => (
    <div className="p-4">
      <Checkbox {...args} />
    </div>
  )
}

export const CheckedCheckbox: Story = {
  args: {
    checked: true
  },
  render: (args) => (
    <div className="p-4">
      <Checkbox {...args} />
    </div>
  )
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true
  },
  render: (args) => (
    <div className="p-4">
      <Checkbox {...args} />
    </div>
  )
}
