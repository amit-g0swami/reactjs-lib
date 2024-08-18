import React from 'react'
import { ChipGroupProps } from '../../../../types'
import { Chip } from '../../../atoms'

export const ChipGroup: React.FC<ChipGroupProps> = ({
  chips,
  onDelete,
  onClick,
  color = 'neutral',
  className = ''
}: ChipGroupProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color={color}
          onChipClick={() => onClick && onClick(chip)}
          onDelete={() => onDelete && onDelete(chip)}
        />
      ))}
    </div>
  )
}
