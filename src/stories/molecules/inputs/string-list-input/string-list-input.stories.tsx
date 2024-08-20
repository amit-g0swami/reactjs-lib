import { Meta, StoryObj } from '@storybook/react'
import { StringListInput } from '../../../../components'
import { StringListInputProps } from '../../../../src/types'

const meta: Meta = {
  title: 'Form/Input/StringListInput',
  component: StringListInput
}

export default meta

type StringListInputStory = StoryObj<StringListInputProps>

export const DefaultStringListInput: StringListInputStory = {
  args: {
    values: ['Item 1', 'Item 2', 'Item 3'], // Default values for the list
    onListChange: (values: string[]) => console.log('Changed values:', values) // A mock onListChange function
  }
}

export const DisabledStringListInput: StringListInputStory = {
  args: {
    values: ['Apple', 'Banana', 'Cherry'], // Values for the list
    onListChange: (values: string[]) => console.log('Changed values:', values), // A mock onListChange function
    disabled: true // Disable the component
  }
}
