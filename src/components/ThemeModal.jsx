import { Modal } from '@mantine/core'
import React, { useEffect } from 'react'

export const ThemeModal = ({open, close}) => {
    const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'unset'
    }
    }, [open])




  return (
    <Modal opened={opened} onClose={close} title="">
        <p>Modal content</p>
      </Modal>
  )
}
