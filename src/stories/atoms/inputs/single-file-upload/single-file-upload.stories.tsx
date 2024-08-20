import type { Meta, StoryObj } from '@storybook/react'
import { SingleFileUpload } from '../../../../components'

const meta: Meta<typeof SingleFileUpload> = {
  title: 'Form/Input/SingleFileUpload',
  component: SingleFileUpload
}

type Story = StoryObj<typeof SingleFileUpload>
export default meta

export const DefaultSingleUpload: Story = {}

export const WithDragAndDrop: Story = {
  args: {
    dragAndDrop: true,
    showProgress: true
  }
}

export const WithSizeLimit: Story = {
  args: {
    maxSize: 5000000, // 5MB
    showProgress: true
  }
}
