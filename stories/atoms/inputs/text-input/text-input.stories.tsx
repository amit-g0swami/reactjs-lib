import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from '../../../../src/components'

const meta: Meta<typeof TextInput> = {
  title: 'Form/Input/TextInput',
  component: TextInput
}

type Story = StoryObj<typeof TextInput>
export default meta

export const DefaultTextInput: Story = {
  args: {
    placeholder: 'Enter text...'
  }
}

export const SuccessTextInput: Story = {
  args: {
    placeholder: 'Enter URL...',
    invalid: false
  }
}

export const InvalidTextInput: Story = {
  args: {
    placeholder: 'Enter text...',
    invalid: true
  }
}
