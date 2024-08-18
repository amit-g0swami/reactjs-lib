import React from 'react'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  })

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}
