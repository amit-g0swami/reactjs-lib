import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '../../../../src/components'

const meta: Meta<typeof Radio> = {
  title: 'Form/Input/Radio',
  component: Radio
}

type Story = StoryObj<typeof Radio>
export default meta

export const PrimaryRadioChecked: Story = {
  args: {
    label: 'Primary Radio',
    radioType: 'primary',
    name: 'radioOptions',
    value: 'option1',
    hidden: true,
    checked: true
  }
}

export const PrimaryRadioUnchecked: Story = {
  args: {
    label: 'Primary Radio',
    radioType: 'primary',
    name: 'radioOptions',
    value: 'option1',
    hidden: true,
    checked: false
  }
}

export const SecondaryRadio: Story = {
  args: {
    label: 'Secondary Radio',
    radioType: 'secondary',
    name: 'radioOptions',
    value: 'option2'
  }
}

export const TertiaryRadio: Story = {
  args: {
    label: 'Tertiary Radio',
    radioType: 'tertiary',
    name: 'radioOptions',
    value: 'option3'
  }
}
