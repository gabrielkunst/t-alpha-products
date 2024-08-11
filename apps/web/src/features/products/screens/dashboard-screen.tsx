import { Subtitle } from '@/components/ui/subtitle'
import { Title } from '@/components/ui/title'

import { CreateProductButton } from '../components/create-product-button'
import { ProductsTableWrapper } from '../components/products-table-wrapper'

export function DashboardScreen() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Title>Produtos</Title>
          <Subtitle>Visualize e gerencie os produtos cadastrados</Subtitle>
        </div>

        <CreateProductButton />
      </div>
      <ProductsTableWrapper />
    </section>
  )
}
