import { env } from '@alpha/env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  productId: string
}

export async function deleteProduct(request: NextRequest, params: Params) {
  try {
    const { productId } = params

    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')

    const response = await fetch(
      `${env.API_URL}/api/products/delete-product/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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
