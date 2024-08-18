import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextAreaInput } from '../../../../src/components'

const meta: Meta<typeof TextAreaInput> = {
  title: 'Form/Input/TextAreaInput',
  component: TextAreaInput
}

type Story = StoryObj<typeof TextAreaInput>

export default meta

export const DefaultTextAreaInput: Story = {
  args: {
    value: '',
    placeholder: 'Enter text...',
    disabled: false,
    rows: 4,
    cols: 40,
    lengthReq: 200
  },
  render: (args) => {
    const [text, setText] = useState<string>('')

    const handleTextChange = (e) => {
      setText(e.target.value)
    }

    return (
      <TextAreaInput
        value={text}
        placeholder={args.placeholder}
        disabled={args.disabled}
        rows={args.rows}
        cols={args.cols}
        onChange={handleTextChange}
        invalid={false}
      />
    )
  }
}

export const ExampleTextAreaInput: Story = {
  render: () => {
    const [text, setText] = useState<string>('')

    const handleTextChange = (e) => {
      setText(e.target.value)
    }

    return (
      <TextAreaInput
        value={text}
        placeholder="Enter your text here..."
        onChange={handleTextChange}
        invalid={text.length > 200}
      />
    )
  }
}
