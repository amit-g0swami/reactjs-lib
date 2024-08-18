import React, { createContext, useContext } from 'react'

type FormContextType = {
  formData: Record<string, any>
  errors: Record<string, string>
  validate: () => boolean
  setFormData: (data: Record<string, any>) => void
  setErrors: (errors: Record<string, string>) => void
  handleInputChange: (name: string, value: any) => void
  handleSubmit: (e: React.FormEvent) => void
}

export const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
