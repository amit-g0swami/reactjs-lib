import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TableComponent } from '../../../components'
import { FaFolder } from 'react-icons/fa'
import { FILTER_TYPE, SORT_DIRECTION, TableColumn } from '../../../types'

const meta: Meta<typeof TableComponent> = {
  title: 'Table/TableComponent',
  component: TableComponent
}

type Story = StoryObj<typeof TableComponent>
export default meta

interface IRowData {
  id: number
  name: string
  age: number
  location: string
}

interface IColumnData {
  id: string
  label: string
}

export const DefaultTable: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [pageLimit, setPageLimit] = useState(10)
    const [_searchedValue, setSearchedValue] = useState('')
    const handlePageChange = (page: number) => {
      setPage(page)
    }
    const handlePageLimitChange = (pageLimit: number) => {
      setPageLimit(pageLimit)
    }
    const getSearchedValue = (value: string) => {
      setSearchedValue(value)
      console.log(value)
    }
    const columns: TableColumn<IRowData, IColumnData>[] = [
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' },
      {
        id: 'location',
        label: 'Location',
        render: (rowData: IRowData, column: IColumnData) => (
          <div>
            <FaFolder />
            {rowData.location}
          </div>
        )
      }
    ]
    const rowData: IRowData[] = [
      { id: 1, name: 'John', age: 25, location: 'New York' },
      { id: 2, name: 'Jane', age: 30, location: 'Los Angeles' },
      { id: 3, name: 'Doe', age: 28, location: 'Chicago' }
    ]
    const definedFilters = [
      { columnId: 'name', value: '', type: FILTER_TYPE.STRING },
      { columnId: 'age', value: '', type: FILTER_TYPE.BOOLEAN }
    ]
    const definedSorts = [
      { columnId: 'name', direction: SORT_DIRECTION.ASC },
      { columnId: 'age', direction: SORT_DIRECTION.DESC }
    ]
    const handleFilterChange = (filters) => {
      console.log(filters)
    }
    const handleSortChange = (sort) => {
      console.log(sort)
    }
    const handleEditClick = (row) => {
      console.log(row)
    }
    return (
      <TableComponent
        showEditButton
        rowData={rowData}
        columns={columns}
        definedFilters={definedFilters}
        page={page}
        pageLimit={pageLimit}
        definedSorts={definedSorts}
        lowestPageCount={0}
        rowKey="id"
        className="bg-neutral-100"
        handleEditClick={handleEditClick}
        handleSortChange={handleSortChange}
        handlePageChange={handlePageChange}
        getSearchedValue={getSearchedValue}
        handleFilterChange={handleFilterChange}
        handlePageLimitChange={handlePageLimitChange}
      />
    )
  }
}
