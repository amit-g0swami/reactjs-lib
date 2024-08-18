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
