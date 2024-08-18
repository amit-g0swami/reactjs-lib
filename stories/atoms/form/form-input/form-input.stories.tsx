import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormInput, TextInput } from '../../../../src/components'

const meta: Meta<typeof FormInput> = {
  title: 'Form/FormInput',
  component: FormInput
}

type Story = StoryObj<typeof FormInput>
export default meta

export const DefaultFormInput: Story = {
  args: {
    label: 'Default Input',
    children: (
      <TextInput value="" onChange={() => {}} placeholder="Enter text..." />
    )
  }
}

export const RequiredFormInput: Story = {
  args: {
    label: 'Required Input',
    required: true,
    children: (
      <TextInput
        value=""
        onChange={() => {}}
        placeholder="This is required..."
      />
    )
  }
}

export const FormInputWithTooltip: Story = {
  args: {
    label: 'Input with Tooltip',
    tooltip: 'This is a tooltip',
    children: (
      <TextInput
        value=""
        onChange={() => {}}
        placeholder="Hover over label..."
      />
    )
  }
}
