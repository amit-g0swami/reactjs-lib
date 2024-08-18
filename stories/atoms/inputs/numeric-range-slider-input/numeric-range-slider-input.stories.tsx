import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { NumericRangeSliderInput } from '../../../../src/components'

const meta: Meta<typeof NumericRangeSliderInput> = {
  title: 'Form/Input/NumericRangeSliderInput',
  component: NumericRangeSliderInput
}

type Story = StoryObj<typeof NumericRangeSliderInput>

export default meta

export const ExampleNumericRangeSliderInput: Story = {
  args: {
    min: 0,
    max: 100,
    value: [25, 75]
  },
  render: () => {
    const [range, setRange] = useState<[number, number]>([25, 75])
    const handleRangeChange = (value: [number, number]) => {
      setRange(value)
    }
    return (
      <NumericRangeSliderInput
        min={0}
        max={100}
        value={range}
        onRangeChange={handleRangeChange}
      />
    )
  }
}
