import { env } from '@alpha/env'
import { NextRequest, NextResponse } from 'next/server'

export async function getProducts(request: NextRequest) {
  try {
    const accessToken = request.cookies.get('accessToken')?.value

    const response = await fetch(
      `${env.API_URL}/api/products/get-all-products`,
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
