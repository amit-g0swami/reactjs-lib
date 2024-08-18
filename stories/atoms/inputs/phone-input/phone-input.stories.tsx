import type { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from '../../../../src/components'

const meta: Meta<typeof PhoneInput> = {
  title: 'Form/input/PhoneInput',
  component: PhoneInput
}

type Story = StoryObj<typeof PhoneInput>
export default meta

export const DefaultPhoneInput: Story = {
  args: {
    value: '',
    onChange: (value) => console.log(value),
    countries: [
      { value: '+1', label: 'US (+1)', regexValidity: '^\\d{10}$' },
      { value: '+44', label: 'UK (+44)', regexValidity: '^\\d{8}$' },
      { value: '+91', label: 'India (+91)', regexValidity: '^\\d{10}$' },
      { value: '+971', label: 'UAE (+971)', regexValidity: '^\\d{10}$' },
      {
        value: '+966',
        label: 'Saudi Arabia (+966)',
        regexValidity: '^\\d{10}$'
      }
      // ... add other country codes as needed
    ]
  }
}

export const PhoneInputWithPlaceholder: Story = {
  args: {
    value: '',
    onChange: (value) => console.log(value),
    countries: [
      { value: '+1', label: 'US (+1)', regexValidity: '^\\d{10}$' },
      { value: '+44', label: 'UK (+44)', regexValidity: '^\\d{10}$' }
      // ... add other country codes as needed
    ],
    placeholder: 'Enter phone number...'
  }
}

export const DisabledPhoneInput: Story = {
  args: {
    value: '',
    onChange: (value) => console.log(value),
    countries: [
      { value: '+1', label: 'US (+1)', regexValidity: '^\\d{10}$' },
      { value: '+44', label: 'UK (+44)', regexValidity: '^\\d{10}$' }
      // ... add other country codes as needed
    ],
    disabled: true
  }
}
