'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { ProductDTO } from '../utils/dtos'
import { UpdateProductForm } from './update-product-form'

interface UpdateProductButtonProps {
  product: ProductDTO
}

export function UpdateProductButton({ product }: UpdateProductButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full font-normal">
          Editar
        </Button>
      </DialogTrigger>

      <UpdateProductForm handleClose={handleClose} product={product} />
    </Dialog>
  )
}
