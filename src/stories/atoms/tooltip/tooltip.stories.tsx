import React from 'react'
import { Container } from '../../../components'
import { Tooltip } from '../../../components/atoms/tooltips/tooltip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'atoms/Tooltip',
  component: Tooltip
}

type Story = StoryObj<typeof Tooltip>
export default meta

export const DefaultTooltip: Story = {
  args: {
    text: 'Tooltip content',
    children: <Container>Hover me</Container>
  }
}
