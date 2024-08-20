import type { Meta, StoryObj } from '@storybook/react'
import { DateRangeInput } from '../../../../components'

const meta: Meta<typeof DateRangeInput> = {
  title: 'Form/Input/DateRangeInput',
  component: DateRangeInput
}

type Story = StoryObj<typeof DateRangeInput>
export default meta

export const DefaultDateRangeInput: Story = {
  args: {}
}

export const BoundedDateRangeInput: Story = {
  args: {
    minDate: '2022-01-01',
    maxDate: '2023-01-01'
  }
}

export const DisabledDateRangeInput: Story = {
  args: {
    disabled: true
  }
}
