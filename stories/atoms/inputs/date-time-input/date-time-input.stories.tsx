import type { Meta, StoryObj } from '@storybook/react'
import { DateTimeInput } from '../../../../src/components'

const meta: Meta<typeof DateTimeInput> = {
  title: 'Form/Input/DateTimeInput',
  component: DateTimeInput
}

type Story = StoryObj<typeof DateTimeInput>
export default meta

export const DefaultDateTimeInput: Story = {
  args: {}
}

export const BoundedDateTimeInput: Story = {
  args: {
    minDateTime: '2022-01-01T00:00',
    maxDateTime: '2023-01-01T00:00'
  }
}

export const DisabledDateTimeInput: Story = {
  args: {
    disabled: true
  }
}
