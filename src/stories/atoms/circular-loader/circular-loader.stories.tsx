import { CircularLoader } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CircularLoader> = {
  title: 'atoms/CircularLoader',
  component: CircularLoader
}

type Story = StoryObj<typeof CircularLoader>
export default meta

export const DefaultCircularLoader: Story = {}

export const LargeCircularLoader: Story = {
  args: {
    size: 80
  }
}

export const ColoredCircularLoader: Story = {
  args: {
    color: 'tertiary-500'
  }
}

export const CustomClassCircularLoader: Story = {
  args: {
    className: 'm-4'
  }
}
