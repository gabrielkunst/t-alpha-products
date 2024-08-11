'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CreateProductForm } from './create-product-form'

export function CreateProductButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Cadastrar produto</Button>
      </DialogTrigger>

      <CreateProductForm handleClose={handleClose} />
    </Dialog>
  )
}
