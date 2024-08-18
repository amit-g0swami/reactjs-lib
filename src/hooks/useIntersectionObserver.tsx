import React from 'react'
import { IUseIntersectionObserver } from '../types'

export const useIntersectionObserver: IUseIntersectionObserver = (
  elementRef,
  options
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(
    null
  )

  const observer = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(([entry]) => {
      setEntry(entry)
    }, options)

    const { current: currentObserver } = observer

    if (elementRef.current) {
      currentObserver.observe(elementRef.current)
    }

    return () => {
      currentObserver.disconnect()
    }
  }, [elementRef, options])

  return entry
}
