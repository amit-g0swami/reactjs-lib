import { LinearLoader } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LinearLoader> = {
  title: 'atoms/LinearLoader',
  component: LinearLoader
}

type Story = StoryObj<typeof LinearLoader>
export default meta

export const DefaultLinearLoader: Story = {
  args: {
    progress: 50
  }
}

export const LoadingLinearLoader: Story = {
  args: {
    isLoading: true
  }
}

export const ColoredLinearLoader: Story = {
  args: {
    progress: 75,
    color: 'secondary'
  }
}

export const CustomClassLinearLoader: Story = {
  args: {
    progress: 30,
    className: 'mt-4'
  }
}
