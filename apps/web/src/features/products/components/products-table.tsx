'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ProductDTO } from '../utils/dtos'
import { ProductsTableRow } from './products-table-row'

interface ProductsTableProps {
  products: ProductDTO[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <ProductsTableRow key={product.id} product={product} />
          ))}

          {products.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="py-20 text-center">
                Nenhum produto cadastrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
