import React from 'react'
import { TableCellProps, TableColumn } from '../../../../../types'

export const TableCell = <T, U>({ row, column }: TableCellProps<T, U>) => {
  if (column.render) {
    const RenderComponent = column.render as React.ComponentType<{
      rowData: T
      column: TableColumn<T, U>
    }>
    return <RenderComponent rowData={row} column={column} />
  } else {
    return row[column.id]
  }
}
