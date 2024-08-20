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

type Story = StoryObj<typeof FormProvider>
export default meta

export const UserCreationForm: Story = {
  args: {
    children: (
      <>
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
      </>
    )
  }
}

export const UserCreationFormWithCustomSubmit: Story = {
  args: {
    children: (
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
    )
  }
}
