import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '../../../src/components'

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/Input/RadioGroup',
  component: RadioGroup
}

type Story = StoryObj<typeof RadioGroup>
export default meta

export const DefaultRadioGroup: Story = {
  args: {
    name: 'groupOptions',
    options: [
      {
        value: 'option1',
        label: 'Primary Option',
        radioType: 'primary'
      },
      {
        value: 'option2',
        label: 'Secondary Option',
        radioType: 'secondary'
      },
      {
        value: 'option3',
        label: 'Tertiary Option',
        radioType: 'tertiary'
      }
    ]
  }
}
