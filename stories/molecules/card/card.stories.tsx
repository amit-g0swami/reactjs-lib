import { Card } from '../../../src/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'molecules/Card',
  component: Card,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    outlined: {
      control: {
        type: 'boolean'
      }
    }
  }
}

type Story = StoryObj<typeof Card>
export default meta

export const DefaultCard: Story = {
  args: {
    title: 'Sample Card',
    content: 'This is a sample card with default settings.',
    size: 'medium'
  }
}

export const ImageCard: Story = {
  args: {
    title: 'Image Card',
    content: 'This card has an image at the top.',
    img: 'https://via.placeholder.com/400',
    size: 'medium'
  }
}

export const OutlinedCard: Story = {
  args: {
    title: 'Outlined Card',
    content: 'This card has an outline.',
    outlined: true,
    size: 'medium'
  }
}

export const LargeCard: Story = {
  args: {
    title: 'Large Card',
    content: 'This is a large-sized card.',
    size: 'large'
  }
}

export const CardWithSmallShadow: Story = {
  args: {
    title: 'Card with Small Shadow',
    content: 'This card has a small shadow.',
    shadow: 'small',
    size: 'medium'
  }
}

export const CardWithMediumShadow: Story = {
  args: {
    title: 'Card with Medium Shadow',
    content: 'This card has a medium shadow.',
    shadow: 'medium',
    size: 'medium'
  }
}

export const CardWithLargeShadow: Story = {
  args: {
    title: 'Card with Large Shadow',
    content: 'This card has a large shadow.',
    shadow: 'large',
    size: 'medium'
  }
}
