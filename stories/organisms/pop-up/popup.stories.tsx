import React, { useState } from 'react'
import { PopUp, Button } from '../../../src/components' // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react'
import { LuClipboardList } from 'react-icons/lu'
import { MdErrorOutline } from 'react-icons/md'

const meta: Meta<typeof PopUp> = {
  title: 'organisms/PopUp',
  component: PopUp
}

type Story = StoryObj<typeof PopUp>
export default meta

export const DefaultPopUp: Story = {
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="p-4">
        <Button btnType="primary" onClick={() => setIsOpen(true)}>
          Open PopUp
        </Button>
        <PopUp
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Pop-up Header"
          Icon={LuClipboardList}
          footer={
            <Button btnType="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          }
        >
          <span>This is the modal content.</span>
        </PopUp>
      </div>
    )
  }
}

export const ErrorPopUp: Story = {
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="p-4">
        <Button btnType="primary" onClick={() => setIsOpen(true)}>
          Open ErrorPopUp
        </Button>
        <PopUp
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Error Header!"
          iconClassName="text-primary-100"
          Icon={MdErrorOutline} // Apply the color class here
          footer={
            <Button btnType="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          }
        >
          <span>
            Oops! We have ran into an unexpected error. Please try again the
            process.
          </span>
        </PopUp>
      </div>
    )
  }
}
