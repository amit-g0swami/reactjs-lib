import { useEffect } from 'react'
import { IUseOutsideClick } from '../types'

export const useOutsideClick: IUseOutsideClick = (ref, callback) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
