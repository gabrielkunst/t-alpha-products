import { TableCell, TableRow } from '@/components/ui/table'
import { formatCurrency } from '@/lib/utils'

import { ProductDTO } from '../utils/dtos'
import { TableRowActions } from './table-row-actions'

interface ProductsTableRowProps {
  product: ProductDTO
}

export function ProductsTableRow({ product }: ProductsTableRowProps) {
  const { id, name, description, price, stock } = product

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{description || 'N/A'}</TableCell>
      <TableCell>{formatCurrency(price)}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>
        <TableRowActions product={product} />
      </TableCell>
    </TableRow>
  )
}
