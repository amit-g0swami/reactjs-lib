import { Switch } from '../../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  title: 'Form/Input/Switch',
  component: Switch
}

type Story = StoryObj<typeof Switch>
export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const onToggle = () => {
  console.log('checked')
}

export const DefaultSwitch: Story = {
  args: {
    checked: false,
    onSwitch: onToggle
  }
}

export const ToggledSwitch: Story = {
  args: {
    checked: true,
    onSwitch: onToggle
  }
}
