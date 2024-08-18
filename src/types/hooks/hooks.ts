import React from 'react'

type ReturnVoid = () => void

export interface IUseOutsideClick {
  (ref: React.RefObject<HTMLElement>, callback: ReturnVoid): void
}

export interface IUseDebounce {
  (value: string, delay: number): string
}
