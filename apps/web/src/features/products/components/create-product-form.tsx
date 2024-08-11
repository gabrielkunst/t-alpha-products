'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { ProductSchema } from '../utils/schemas'
import { ProductForm } from './product-form'

interface CreateProductFormProps {
  handleClose: () => void
}

export function CreateProductForm({ handleClose }: CreateProductFormProps) {
  const router = useRouter()

  const onSubmit = async (formData: ProductSchema) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto')
      }

      const json = await response.json()

      toast.success(json.message)

      router.refresh()
      handleClose()
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao cadastrar o produto. Tente novamente mais tarde.'
      )
    }
  }

  return (
    <DialogContent className="space-y-6 sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Cadastrar produto</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para cadastrar um novo produto
        </DialogDescription>
      </DialogHeader>

      <ProductForm onSubmit={onSubmit} />
    </DialogContent>
  )
}
