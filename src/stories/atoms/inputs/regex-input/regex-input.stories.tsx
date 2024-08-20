import type { Meta, StoryObj } from '@storybook/react'
import { RegexInput } from '../../../../components'

const meta: Meta<typeof RegexInput> = {
  title: 'Form/Input/RegexInput',
  component: RegexInput
}

type Story = StoryObj<typeof RegexInput>
export default meta

export const DefaultRegexInput: Story = {
  args: {
    placeholder: 'Enter pattern-matching string...',
    pattern: '^[A-Za-z]+$' // Matches only alphabets
  }
}

export const EmailPatternRegexInput: Story = {
  args: {
    placeholder: 'Enter email...',
    pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$' // Basic email pattern
  }
}

export const NumberPatternRegexInput: Story = {
  args: {
    placeholder: 'Enter numbers only...',
    pattern: '^[0-9]+$' // Matches only numbers
  }
}
