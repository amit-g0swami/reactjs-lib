import React from 'react'

export type ButtonProps = {
  btnType: 'primary' | 'secondary' | 'tertiary'
  type?: 'button' | 'submit' | 'reset'
  disable?: boolean
  onClick?: () => void
  name?: string
  value?: string
  className?: string
  btnText?: string
  form?: string
} & { children?: React.ReactNode }

export type ButtonWithIconProps = ButtonProps & {
  Icon: IconType
}

export type FloatingButtonProps = ButtonProps & {
  Icon: IconType
  rounded?: boolean
}
