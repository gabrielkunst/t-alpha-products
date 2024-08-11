import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { ProductDTO } from '../utils/dtos'

interface UseRowActionsProps {
  product: ProductDTO
}

export function useRowActions({ product }: UseRowActionsProps) {
  const router = useRouter()

  const handleDelete = async () => {
    try {
      console.log(product.id)
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'DELETE',
      })

      const json = await response.json()

      if (!response.ok) {
        toast.error(json.message)
        return
      }

      toast.success(json.message)

      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error(
        'Ocorreu um erro ao excluir o produto. Por favor, tente novamente mais tarde.'
      )
    }
  }

  return {
    handleDelete,
  }
}
