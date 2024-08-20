import { Loader } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Loader> = {
  title: 'atoms/Loader',
  component: Loader
}

type Story = StoryObj<typeof Loader>
export default meta

export const DefaultLoader: Story = {}
