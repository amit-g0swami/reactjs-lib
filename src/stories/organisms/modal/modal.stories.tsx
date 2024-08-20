import React, { useState } from 'react'
import { Modal, Button } from '../../../components' // Adjust the path as needed
import type { Meta, StoryObj } from '@storybook/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { LuClipboardList } from 'react-icons/lu'

const meta: Meta<typeof Modal> = {
  title: 'organisms/Modal',
  component: Modal
}

type Story = StoryObj<typeof Modal>
export default meta

export const DefaultModal: Story = {
  args: {},
  render: (_args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="p-4">
        <Button btnType="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          // title="Modal Title"
          header={
            <div className="flex justify-between items-center">
              <div className="flex">
                <LuClipboardList className="text-primary-400 h-6 w-6 mr-2" />
                <h3 className="text-xl leading-7 font-bold text-neutral-900">
                  Modal Title
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <AiOutlineCloseCircle
                  className="text-neutral-400 h-6 w-6 hover:text-primary-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          }
          footer={
            <Button btnType="primary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          }
        >
          <span>This is the modal content.</span>
        </Modal>
      </div>
    )
  }
}
