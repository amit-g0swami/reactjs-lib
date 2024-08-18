import React from 'react'
import { IUseInfiniteScroll } from '../types'

export const useInfiniteScroll: IUseInfiniteScroll = (callback) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isFetching, setIsFetching] = React.useState(false)
  const [isBottom, setIsBottom] = React.useState(false)

  const handleScroll = () => {
    if (
      scrollRef.current &&
      window.innerHeight + window.scrollY >=
        scrollRef.current.offsetTop + scrollRef.current.clientHeight
    ) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (isBottom && !isFetching) {
      setIsFetching(true)
      callback()
    }
  }, [isBottom])

  return { scrollRef, isFetching }
}
