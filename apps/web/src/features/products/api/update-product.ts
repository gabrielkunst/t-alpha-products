import { env } from '@alpha/env'
import { NextRequest, NextResponse } from 'next/server'

import { productSchema } from '../utils/schemas'

type Params = {
  params: {
    productId: string
  }
}

export async function updateProduct(request: NextRequest, { params }: Params) {
  try {
    const { productId } = params
    const body = await request.json()

    const validatedFields = productSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json({
        status: 400,
        message: 'Campos inválidos.',
        errors: validatedFields.error.flatten(),
      })
    }

    const accessToken = request.cookies.get('accessToken')?.value

    const response = await fetch(
      `${env.API_URL}/api/products/update-product/${productId}`,
      {
        body: JSON.stringify(body),
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok || response.status === 404) {
      throw new Error('Erro ao atualizar produto.')
    }

    return NextResponse.json({
      status: 200,
      message: 'Produto atualizado com sucesso.',
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
