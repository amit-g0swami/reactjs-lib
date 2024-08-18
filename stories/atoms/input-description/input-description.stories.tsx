import { InputDescription } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const meta: Meta<typeof InputDescription> = {
  title: 'atoms/Description',
  component: InputDescription
}

type Story = StoryObj<typeof InputDescription>
export default meta

export const DefaultDescription: Story = {
  args: {
    text: 'Password is not strong',
    invalid: true,
    Icon: AiOutlineInfoCircle
  }
}
