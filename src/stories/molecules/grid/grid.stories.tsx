import type { Meta, StoryObj } from '@storybook/react'
import Grid from '../../../components/molecules/grids/grid'

const meta: Meta<typeof Grid> = {
  title: 'molecules/Grid',
  component: Grid,
  argTypes: {
    container: {
      control: {
        type: 'boolean'
      }
    },
    item: {
      control: {
        type: 'boolean'
      }
    },
    spacing: {
      control: {
        type: 'number'
      }
    },
    direction: {
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'column', 'column-reverse']
      }
    },
    wrap: {
      control: {
        type: 'select',
        options: ['wrap', 'wrap-reverse', 'nowrap']
      }
    },
    xs: {
      control: {
        type: 'number'
      }
    },
    sm: {
      control: {
        type: 'number'
      }
    },
    md: {
      control: {
        type: 'number'
      }
    },
    lg: {
      control: {
        type: 'number'
      }
    },
    xl: {
      control: {
        type: 'number'
      }
    }
  }
}

type Story = StoryObj<typeof Grid>
export default meta

export const DefaultGrid: Story = {
  args: {
    container: true,
    spacing: 4
  }
}

export const ItemGrid: Story = {
  args: {
    container: true,
    item: true,
    spacing: 4
  }
}

export const RowGrid: Story = {
  args: {
    container: true,
    direction: 'row',
    spacing: 4
  }
}

export const ColumnGrid: Story = {
  args: {
    container: true,
    direction: 'column',
    spacing: 4
  }
}
