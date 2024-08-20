import type { Meta, StoryObj } from '@storybook/react'
import { DateInput } from '../../../../components'
import { parse } from 'date-fns'

const meta: Meta<typeof DateInput> = {
  title: 'Form/Input/DateInput',
  component: DateInput
}

type Story = StoryObj<typeof DateInput>
export default meta

export const DefaultDateInput: Story = {
  args: {
    placeholder: 'Select a date...',
    preSelectedDate: null,
    bounded: false
  }
}

// Parse the date strings to Date objects using date-fns
const minDate = parse('26/02/2023', 'dd/MM/yyyy', new Date())
const maxDate = parse('25/06/2023', 'dd/MM/yyyy', new Date())

export const BoundedDateInput: Story = {
  args: {
    placeholder: 'Select a date...',
    minDate: minDate,
    maxDate: maxDate,
    bounded: true
  }
}

export const DisabledDateInput: Story = {
  args: {
    placeholder: 'Select a date...',
    disabled: true
  }
}

export const OpenedDateInput: Story = {
  args: {
    opened: true,
    placeholder: 'Select a date...',
    openNext: false
  }
}

const preSelectDate = parse('05/06/2024', 'dd/MM/yyyy', new Date())

export const preSelectedDate: Story = {
  args: {
    placeholder: 'Select a date...',
    preSelectedDate: preSelectDate,
    bounded: false
  }
}
