import React from 'react'
import { IUseFetch } from '../types'

export const useFetch = <T,>(url: string): IUseFetch<T> => {
  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<unknown | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {
    data,
    loading,
    error
  }
}
