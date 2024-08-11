import { env } from '@alpha/env'
import { cookies } from 'next/headers'

import { ProductDTO } from '../utils/dtos'
import { ProductsTable } from './products-table'

async function fetchProducts(): Promise<ProductDTO[]> {
  const accessToken = cookies().get('accessToken')?.value

  const response = await fetch(`${env.APP_URL}/api/products`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'no-cache',
  })

  const { data } = await response.json()

  return data.products
}

export async function ProductsTableWrapper() {
  const products = await fetchProducts()

  return <ProductsTable products={products} />
}
