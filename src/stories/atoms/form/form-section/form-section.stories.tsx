import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormSection, TextInput } from '../../../../components'

const meta: Meta<typeof FormSection> = {
  title: 'Form/FormSection',
  component: FormSection
}

type Story = StoryObj<typeof FormSection>
export default meta

export const DefaultFormSectionGroup: Story = {
  args: {
    label: 'Group Label',
    children: (
      <TextInput
        placeholder="Enter text..."
        value=""
        onChange={function (e): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
  }
}

export const FormSectionGroupWithTooltip: Story = {
  args: {
    label: 'Group Label with Tooltip',
    tooltip: 'This is a group tooltip',
    children: (
      <TextInput
        placeholder="Enter text..."
        value=""
        onChange={function (e): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
  }
}

export const FormSectionGroupMultipleInputs: Story = {
  args: {
    label: 'Multiple Inputs',
    children: (
      <>
        <TextInput
          placeholder="First input..."
          value=""
          onChange={function (e): void {
            throw new Error('Function not implemented.')
          }}
        />
        <TextInput
          placeholder="Second input..."
          value=""
          onChange={function (e): void {
            throw new Error('Function not implemented.')
          }}
        />
      </>
    )
  }
}
