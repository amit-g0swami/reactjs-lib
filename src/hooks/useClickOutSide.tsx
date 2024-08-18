import React, { useEffect } from 'react'
import { IUseOutsideClick } from '../types/hooks/hooks'

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
