import type { Meta, StoryObj } from '@storybook/react'
import { MultiFileUpload } from '../../../../components'

const meta: Meta<typeof MultiFileUpload> = {
  title: 'Form/Input/MultiFileUpload',
  component: MultiFileUpload
}

type Story = StoryObj<typeof MultiFileUpload>
export default meta

export const DefaultMultiUpload: Story = {}

export const WithDragAndDrop: Story = {
  args: {
    dragAndDrop: true,
    showProgress: true
  }
}

export const WithFileLimitations: Story = {
  args: {
    maxFiles: 5,
    minFiles: 2,
    maxSize: 5000000, // 5MB for each file
    showProgress: true
  }
}
