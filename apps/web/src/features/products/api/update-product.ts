import { env } from '@alpha/env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { productSchema } from '../utils/schemas'

type Params = {
  productId: string
}

export async function updateProduct(request: NextRequest, params: Params) {
  try {
    const { productId } = params
    const body = await request.json()
    const cookiesStore = cookies()

    const validatedFields = productSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json({
        status: 400,
        message: 'Campos inválidos.',
        errors: validatedFields.error.flatten(),
      })
    }

    const accessToken = cookiesStore.get('accessToken')

    const response = await fetch(
      `${env.API_URL}/api/products/update-product/${productId}`,
      {
        body: JSON.stringify(body),
        method: 'PATCH',
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )

    const json = await response.json()

    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: json.message,
      })
    }

    return NextResponse.json({
      status: response.status,
      message: json.message,
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
