import { env } from '@alpha/env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { loginSchema } from '@/features/auth/utils'

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const cookiesStore = cookies()
    const validatedFields = loginSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json({
        status: 400,
        message: 'Campos inválidos.',
        errors: validatedFields.error.flatten(),
      })
    }

    const response = await fetch(`${env.API_URL}/api/auth/login`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    const json = await response.json()

    cookiesStore.set('accessToken', json.data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: ONE_WEEK_IN_SECONDS,
    })

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
