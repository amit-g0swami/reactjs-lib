import type { Meta, StoryObj } from '@storybook/react'
import { NumberInput } from '../../../../src/components'

const meta: Meta<typeof NumberInput> = {
  title: 'Form/Input/NumberInput',
  component: NumberInput
}

type Story = StoryObj<typeof NumberInput>
export default meta

export const DefaultNumberInput: Story = {
  args: {
    placeholder: 'Enter Number...'
  }
}

export const SuccessNumberInput: Story = {
  args: {
    placeholder: 'Enter Number...',
    invalid: false
  }
}

export const ErrorNumberInput: Story = {
  args: {
    placeholder: 'Enter Number...',
    invalid: true
  }
}

export const BoundedNumberInput: Story = {
  args: {
    min: 0,
    max: 100
  }
}

export const StepNumberInput: Story = {
  args: {
    step: 5
  }
}

export const DisabledNumberInput: Story = {
  args: {
    disabled: true
  }
}
