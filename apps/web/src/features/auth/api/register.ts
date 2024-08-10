import { env } from '@alpha/env'
import { NextRequest, NextResponse } from 'next/server'

import { registerSchema } from '@/features/auth/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedFields = registerSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json({
        status: 400,
        message: 'Campos inválidos.',
        errors: validatedFields.error.flatten(),
      })
    }

    const response = await fetch(`${env.API_URL}/api/auth/register`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const json = await response.json()

    return NextResponse.json({
      status: response.status,
      message: json.message,
    })
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message:
        'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    })
  }
}
