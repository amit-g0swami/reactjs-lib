import { ButtonWithIcon } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'
import { FaSave } from 'react-icons/fa'

const meta: Meta<typeof ButtonWithIcon> = {
  title: 'atoms/Buttons',
  component: ButtonWithIcon
}

type Story = StoryObj<typeof ButtonWithIcon>
export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const SaveIconButton: Story = {
  args: {
    btnText: 'Icon Button',
    btnType: 'primary',
    Icon: FaSave
  }
}
