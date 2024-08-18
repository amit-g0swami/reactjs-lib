import React from 'react'
import { Badge } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlineBell } from 'react-icons/ai'

const meta: Meta<typeof Badge> = {
  title: 'atoms/Badge',
  component: Badge
}

type Story = StoryObj<typeof Badge>
export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const CountBadge: Story = {
  args: {
    badgeContent: '10',
    color: 'default'
  }
}

export const BadgeWithIcon: Story = {
  args: {
    Icon: () => <AiOutlineBell />,
    badgeContent: '10',
    color: 'default'
  }
}
