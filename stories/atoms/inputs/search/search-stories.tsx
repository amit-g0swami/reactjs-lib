import type { Meta, StoryObj } from '@storybook/react'

import { MdDeleteOutline } from 'react-icons/md'
import { SearchBar } from '../../../../src/components'

const meta: Meta<typeof SearchBar> = {
  title: 'Form/Input/SearchBar',
  component: SearchBar
}

type Story = StoryObj<typeof SearchBar>
export default meta

export const DefaultSearch: Story = {
  args: {
    placeholder: 'Enter your text...',
    icon: MdDeleteOutline
  }
}

export const DisabledSearch: Story = {
  args: {
    placeholder: 'Enter text...',
    invalid: false,
    disabled: true
  }
}
