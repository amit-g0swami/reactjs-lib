import Joi from 'joi'
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  FormInput,
  TextInput,
  EmailInput,
  PasswordInput,
  Button,
  Form,
  FormProvider,
  FormRow,
  FormSection
} from '../../../components' // Adjust paths accordingly

const meta: Meta<typeof FormProvider> = {
  title: 'Form/Sample/UserCreationForm',
  component: FormProvider
}

interface IValidationDetails {
  type: string
  validationRules: Record<string, any>
}

const validationDetails: IValidationDetails[] = [
  {
    type: 'string',
    validationRules: {
      maxLength: 10
    }
  }
]

const customValidationMessages = {
  name: "Name can't be empty",
  city: "City can't be empty"
}

type Story = StoryObj<typeof FormProvider>
export default meta

const formValidationSchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string().required(),
  validationRules: Joi.object()
    .pattern(Joi.string(), Joi.any().required())
    .required()
})

const handleFormSubmit = (values: Record<string, any>) => {
  console.log(values)
}

export const UserCreationForm: Story = {
  args: {
    children: (
      <FormProvider
        schema={formValidationSchema}
        validationDetails={validationDetails}
        initialValues={{}}
        customValidationMessages={customValidationMessages}
        onSubmit={handleFormSubmit}
      >
        <FormSection>
          <Form>
            <FormInput label="Name" name="Name" required>
              <TextInput value="" placeholder="Name" />
            </FormInput>
            <FormInput label="City" name="City" required>
              <TextInput value="" name="City" placeholder="City" />
            </FormInput>
            <FormRow>
              <FormInput label="Email" name="Email" required>
                <EmailInput value="" placeholder="Email" />
              </FormInput>
              <FormInput label="Password" name="Password" required>
                <PasswordInput placeholder="Password" />
              </FormInput>
            </FormRow>
          </Form>
        </FormSection>
      </FormProvider>
    )
  }
}

export const UserCreationFormWithCustomSubmit: Story = {
  args: {
    children: (
      <FormProvider
        schema={formValidationSchema}
        validationDetails={validationDetails}
        initialValues={{}}
        customValidationMessages={customValidationMessages}
        onSubmit={handleFormSubmit}
      >
        <FormSection>
          <Form>
            <FormInput label="Name" name="Name" required>
              <TextInput placeholder="Name" name="Name" />
            </FormInput>
            <FormInput label="City" name="City" required>
              <TextInput placeholder="City" name="City" />
            </FormInput>
            <FormRow>
              <FormInput label="Email" name="Email" required>
                <EmailInput placeholder="Email" name="Email" />
              </FormInput>
              <FormInput label="Password" name="Password" required>
                <PasswordInput placeholder="Password" name="Password" />
              </FormInput>
            </FormRow>
            <Button btnType="primary" type="submit" btnText="Create User" />
          </Form>
        </FormSection>
      </FormProvider>
    )
  }
}
