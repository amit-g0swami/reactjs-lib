import React from 'react'
import { IUseHover } from '../types'

export const useHover: IUseHover = (ref) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const on = () => setIsHovered(true)
  const off = () => setIsHovered(false)

  React.useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', on)
      node.addEventListener('mouseleave', off)
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', on)
        node.removeEventListener('mouseleave', off)
      }
    }
  }, [ref])

  return isHovered
}
