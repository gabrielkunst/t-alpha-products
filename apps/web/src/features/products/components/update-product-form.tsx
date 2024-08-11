'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { ProductDTO } from '../utils/dtos'
import { ProductSchema } from '../utils/schemas'
import { ProductForm } from './product-form'

interface UpdateProductFormProps {
  handleClose: () => void
  product: ProductDTO
}

export function UpdateProductForm({
  handleClose,
  product,
}: UpdateProductFormProps) {
  const router = useRouter()

  const onSubmit = async (formData: ProductSchema) => {
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erro ao editar produto')
      }

      const json = await response.json()

      toast.success(json.message)

      router.refresh()
      handleClose()
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao editar o produto. Tente novamente mais tarde.'
      )
    }
  }

  return (
    <DialogContent className="space-y-6 sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Editar produto</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para editar o produto
        </DialogDescription>
      </DialogHeader>

      <ProductForm onSubmit={onSubmit} isEdit defaultValues={product} />
    </DialogContent>
  )
}
