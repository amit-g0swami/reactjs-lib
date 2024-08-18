import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { NumericRangeInput } from '../../../../src/components'

const meta: Meta<typeof NumericRangeInput> = {
  title: 'Form/Input/NumericRangeInput',
  component: NumericRangeInput
}

type Story = StoryObj<typeof NumericRangeInput>

export default meta

export const DefaultNumericRangeInput: Story = {
  args: {
    min: undefined,
    max: undefined,
    minOfMin: Number.MIN_SAFE_INTEGER,
    maxOfMax: Number.MAX_SAFE_INTEGER
  }
}

export const ExampleNumericRangeInput: Story = {
  args: {
    min: 11,
    max: 19,
    minOfMin: Number.MIN_SAFE_INTEGER,
    maxOfMax: Number.MAX_SAFE_INTEGER
  },
  render: () => {
    const [range, setRange] = useState<{ min: number; max: number }>({
      min: 0,
      max: 100
    })

    const handleRangeChange = (e) => {
      setRange(e)
    }

    return (
      <NumericRangeInput
        min={range.min}
        max={range.max}
        minOfMin={Number.MIN_SAFE_INTEGER}
        maxOfMax={Number.MAX_SAFE_INTEGER}
        onChange={handleRangeChange}
        onRangeChange={handleRangeChange}
      />
    )
  }
}
