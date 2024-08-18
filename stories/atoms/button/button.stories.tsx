import { Button } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'atoms/Buttons',
  component: Button
}

type Story = StoryObj<typeof Button>
export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const NormalButton: Story = {
  args: {
    btnText: 'Small Button',
    btnType: 'primary',
    type: 'button',
    disable: false
  }
}
