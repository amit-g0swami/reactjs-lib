import { Link } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'atoms/Link',
  component: Link
}

type Story = StoryObj<typeof Link>
export default meta

export const InternalLink: Story = {
  args: {
    to: '/internal-page',
    children: 'Internal Link'
  }
}

export const ExternalLink: Story = {
  args: {
    to: 'https://www.google.com',
    external: true,
    children: 'External Link',
    className: 'hover:underline-'
  }
}

export const LinkNewTab: Story = {
  args: {
    to: 'https://www.google.com',
    external: true,
    newTab: true,
    children: 'Link that opens in a new tab'
  }
}
