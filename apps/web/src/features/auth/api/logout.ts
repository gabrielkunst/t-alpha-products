import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function logout() {
  try {
    const cookiesStore = cookies()

    cookiesStore.delete('accessToken')

    return NextResponse.json({
      message: 'Logout feito com sucesso',
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
