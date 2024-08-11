import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { ProductSchema, productSchema } from '../utils/schemas'

interface ProductFormProps {
  onSubmit: (formData: ProductSchema) => Promise<void>
  defaultValues?: ProductSchema
  isEdit?: boolean
}

export function ProductForm({
  onSubmit,
  defaultValues,
  isEdit = false,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: defaultValues ?? {},
  })

  const handleFormSubmit = async (formData: ProductSchema) => {
    try {
      await onSubmit(formData)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.'
      )
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-2">
        <div className="space-y-1">
          <Label className="sr-only" htmlFor="name">
            Nome do produto
          </Label>

          <Input
            {...register('name')}
            id="name"
            placeholder="Nome"
            disabled={isSubmitting}
          />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label className="sr-only" htmlFor="description">
            Descrição do produto
          </Label>

          <Input
            {...register('description')}
            id="description"
            placeholder="Descrição"
            disabled={isSubmitting}
          />

          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label className="sr-only" htmlFor="price">
            Preço do produto
          </Label>

          <Input
            {...register('price')}
            id="price"
            type="number"
            step={0.01}
            placeholder="Preço"
            disabled={isSubmitting}
          />

          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div className="space-y-1">
          <Label className="sr-only" htmlFor="stock">
            Estoque do produto
          </Label>

          <Input
            {...register('stock')}
            id="stock"
            type="number"
            placeholder="Estoque"
            disabled={isSubmitting}
          />

          <ErrorMessage>{errors.stock?.message}</ErrorMessage>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button
          type="submit"
          className="w-full sm:w-fit"
          disabled={isSubmitting}
        >
          {isEdit ? 'Salvar' : 'Cadastrar'}
        </Button>
      </div>
    </form>
  )
}
