import { createContext, useContext } from 'react'
import { FormContextType } from '../types'

export const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
