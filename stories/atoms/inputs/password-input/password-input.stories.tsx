import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from '../../../../src/components'

const meta: Meta<typeof PasswordInput> = {
  title: 'Form/Input/PasswordInput',
  component: PasswordInput
}

type Story = StoryObj<typeof PasswordInput>
export default meta

export const DefaultPasswordInput: Story = {
  args: {
    placeholder: 'Enter password...'
  }
}

export const ErrorDefaultPasswordInput: Story = {
  args: {
    placeholder: 'Enter password...',
    invalid: true
  }
}

export const SuccessDefaultPasswordInput: Story = {
  args: {
    placeholder: 'Enter password...',
    invalid: false
  }
}

export const DisabledPasswordInput: Story = {
  args: {
    placeholder: 'Enter password...',
    disabled: true
  }
}

export const PasswordInputWithToggle: Story = {
  args: {
    placeholder: 'Enter password...',
    showPasswordToggle: true
  }
}
