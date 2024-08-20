import { Meta, StoryObj } from '@storybook/react'
import { NumericListInput } from '../../../../components'
import { NumericListInputProps } from '../../../../types'

const meta: Meta = {
  title: 'Form/Input/NumericListInput',
  component: NumericListInput
}

export default meta

type NumericListInputStory = StoryObj<NumericListInputProps>

export const DefaultNumericListInput: NumericListInputStory = {
  args: {
    values: [1, 2, 3], // Default values for the list
    onListChange: (values: number[]) => console.log('Changed values:', values) // A mock onChange function
  }
}

export const DisabledNumericListInput: NumericListInputStory = {
  args: {
    values: [4, 5, 6], // Values for the list
    onListChange: (values: number[]) => console.log('Changed values:', values), // A mock onListChange function
    disabled: true // Disable the component
  }
}

export const BoundedNumericListInput: NumericListInputStory = {
  args: {
    values: [7, 8, 9], // Values for the list
    onListChange: (values: number[]) => console.log('Changed values:', values), // A mock onListChange function
    min: 0, // Minimum allowable number for each input
    max: 10 // Maximum allowable number for each input
  }
}
