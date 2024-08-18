import React from 'react'
import { Label } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const meta: Meta<typeof Label> = {
  title: 'atoms/Label',
  component: Label
}

type Story = StoryObj<typeof Label>
export default meta

export const DefaultLabel: Story = {
  args: {
    text: 'Default Label',
    htmlFor: 'sampleInput',
    mandatory: true,
    Icon: AiOutlineInfoCircle
  }
}

export const LabelWithCustomStyle: Story = {
  args: {
    text: 'Styled Label',
    htmlFor: 'styledInput',
    className: 'text-primary-500',
    mandatory: true,
    Icon: AiOutlineInfoCircle
  }
}

export const LabelWithChildContent: Story = {
  args: {
    text: 'Label with Additional Content: ',
    htmlFor: 'childContentInput',
    mandatory: true,
    Icon: AiOutlineInfoCircle,
    children: <span className="text-secondary-500">(optional)</span>
  }
}
