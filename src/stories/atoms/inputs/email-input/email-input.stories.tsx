import type { Meta, StoryObj } from '@storybook/react'
import { EmailInput } from '../../../../components'

const meta: Meta<typeof EmailInput> = {
  title: 'Form/Input/EmailInput',
  component: EmailInput
}

type Story = StoryObj<typeof EmailInput>
export default meta

export const DefaultEmailInput: Story = {
  args: {
    placeholder: 'Enter email...'
  }
}

export const SuccessEmailInput: Story = {
  args: {
    placeholder: 'Enter email...',
    invalid: false
  }
}

export const InvalidEmailInput: Story = {
  args: {
    placeholder: 'Enter email...',
    invalid: true
  }
}

export const DisabledEmailInput: Story = {
  args: {
    placeholder: 'Enter email...',
    disabled: true
  }
}
