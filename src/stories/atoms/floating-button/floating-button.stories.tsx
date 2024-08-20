import { FloatingButton } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlinePlus } from 'react-icons/ai'

const meta: Meta<typeof FloatingButton> = {
  title: 'atoms/Buttons',
  component: FloatingButton
}

type Story = StoryObj<typeof FloatingButton>
export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AddRoundedButton: Story = {
  args: {
    btnType: 'primary',
    Icon: AiOutlinePlus,
    rounded: true
  }
}
