import { Container } from '../../../components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  title: 'atoms/Container',
  component: Container
}

type Story = StoryObj<typeof Container>
export default meta

export const DefaultContainer: Story = {
  args: {
    children: 'This is default container content.'
  }
}

export const CenteredContainer: Story = {
  args: {
    centered: true,
    children: 'This content is centered.'
  }
}

export const CustomMaxWidthContainer: Story = {
  args: {
    maxWidth: '800px',
    children: 'This container has a custom max width of 800px.'
  }
}

export const PaddedContainer: Story = {
  args: {
    padding: '2rem',
    children: 'This container has a padding of 2rem.'
  }
}
