import { DotsHorizontalIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useRowActions } from '../hooks/use-row-actions'
import { ProductDTO } from '../utils/dtos'
import { UpdateProductButton } from './update-product-button'

interface TableRowActionsProps {
  product: ProductDTO
}

export function TableRowActions({ product }: TableRowActionsProps) {
  const { handleDelete } = useRowActions({
    product,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Ações</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <UpdateProductButton product={product} />
        <DropdownMenuSeparator />
        <Button
          variant="ghost"
          className="w-full font-normal"
          onClick={handleDelete}
        >
          Excluir
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
