import type { Meta, StoryObj } from '@storybook/react'
import { TimeInput } from '../../../../components'

const meta: Meta<typeof TimeInput> = {
  title: 'Form/Input/TimeInput',
  component: TimeInput
}

type Story = StoryObj<typeof TimeInput>
export default meta

export const DefaultTimeInput: Story = {
  args: {
    placeholder: 'Enter text...'
  }
}
