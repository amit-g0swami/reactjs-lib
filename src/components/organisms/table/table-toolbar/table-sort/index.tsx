import React, { useRef, useState } from 'react'
import { Select } from '../../../../molecules'
import { Button, Switch } from '../../../../atoms'
import { useOutsideClick } from '../../../../../hooks'
import { ITableSort, TableSortProps } from '../../../../../types'

export const TableSort: React.FC<TableSortProps> = ({
  definedSorts = [],
  onChange
}) => {
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const tableFilterSortRef = useRef<HTMLDivElement>(null)
  useOutsideClick(tableFilterSortRef, () => setIsSortOpen(false))

  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColumn(e.target.value)
  }

  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')
  }

  const applySort = () => {
    if (selectedColumn) {
      const sort: ITableSort = {
        columnId: selectedColumn,
        direction: sortDirection
      }
      onChange && onChange(sort)
    }
  }

  return (
    <div className="relative flex flex-row" ref={tableFilterSortRef}>
      <Button
        btnText="Sort"
        btnType="secondary"
        onClick={() => setIsSortOpen((filterOpen) => !filterOpen)}
      />
      <div>
        {isSortOpen && (
          <div className="absolute rounded-md w-auto bg-white overflow-y-auto top-10 left-0 border border-neutral-200 shadow-md z-10">
            <div className="flex items-center justify-center gap-2 p-2">
              <Select
                placeholder="Sort by column"
                options={definedSorts.map((col) => ({
                  label: col.columnId,
                  value: col.columnId
                }))}
                onChange={handleColumnChange}
              />
              <div onClick={() => handleSortDirectionChange()}>
                <Switch checked={sortDirection === 'asc'} />
              </div>
              <Button onClick={applySort} btnType="primary">
                Apply Sort
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
