import { env } from '@alpha/env'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  params: {
    productId: string
  }
}

export async function deleteProduct(request: NextRequest, { params }: Params) {
  try {
    const { productId } = params

    const accessToken = request.cookies.get('accessToken')?.value
    const response = await fetch(
      `${env.API_URL}/api/products/delete-product/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok || response.status !== 204) {
      throw new Error('Erro ao excluir o produto.')
    }

    return NextResponse.json({
      status: 200,
      message: 'Produto excluído com sucesso.',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      status: 500,
      message:
        'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    })
  }
}
