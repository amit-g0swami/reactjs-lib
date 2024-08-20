import type { Meta, StoryObj } from '@storybook/react'
import { DateTimeRangeInput } from '../../../../components'
import { DateTimeRangeInputProps } from '../../../../types'

const meta: Meta = {
  title: 'Form/Input/DateTimeRangeInput',
  component: DateTimeRangeInput
}

export default meta

type DateTimeRangeInputStory = StoryObj<DateTimeRangeInputProps>

export const DefaultDateTimeRangeInput: DateTimeRangeInputStory = {
  args: {
    startDate: '',
    endDate: '',
    minStartDate: '2022-01-01T00:00',
    maxEndDate: '2023-01-01T00:00',
    label: 'Date Range'
  }
}

export const DateTimeRangeInputWithValues: DateTimeRangeInputStory = {
  args: {
    startDate: '2022-06-01T12:00',
    endDate: '2022-06-01T18:00',
    minStartDate: '2022-01-01T00:00',
    maxEndDate: '2023-01-01T00:00',
    label: 'Pre-filled Date Range'
  }
}

export const DisabledDateTimeRangeInput: DateTimeRangeInputStory = {
  args: {
    startDate: '',
    endDate: '',
    minStartDate: '2022-01-01T00:00',
    maxEndDate: '2023-01-01T00:00',
    label: 'Disabled Date Range',
    disabled: true
  }
}
