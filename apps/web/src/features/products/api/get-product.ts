import { env } from '@alpha/env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  productId: string
}

export async function getProduct(request: NextRequest, params: Params) {
  try {
    const { productId } = params

    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')

    const response = await fetch(
      `${env.API_URL}/api/products/get-one-product/${productId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
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
      data: json.data,
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
