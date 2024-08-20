import { Logo } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Logo> = {
  title: 'atoms/Logo',
  component: Logo
}

type Story = StoryObj<typeof Logo>
export default meta

export const DefaultLogo: Story = {
  args: {
    src: 'path/to/your/default/logo.png', // Replace with your default logo path
    alt: 'Default Logo'
  }
}

export const LogoWithFixedSize: Story = {
  args: {
    src: 'path/to/your/logo.png', // Replace with your logo path
    alt: 'Fixed Size Logo',
    width: 150,
    height: 50
  }
}

export const LogoWithCustomStyle: Story = {
  args: {
    src: 'path/to/your/logo.png', // Replace with your logo path
    alt: 'Styled Logo',
    className: 'border-2 border-primary-500 rounded'
  }
}

export const ClickableLogo: Story = {
  args: {
    src: 'path/to/your/logo.png', // Replace with your logo path
    alt: 'Clickable Logo',
    onClick: () => alert('Logo clicked!')
  }
}
