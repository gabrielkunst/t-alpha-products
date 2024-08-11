import { env } from '@alpha/env'
import { NextRequest, NextResponse } from 'next/server'

import { productSchema } from '../utils/schemas'

export async function createProduct(request: NextRequest) {
  try {
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
    const response = await fetch(`${env.API_URL}/api/products/create-product`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })

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
