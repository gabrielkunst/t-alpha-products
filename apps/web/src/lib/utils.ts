import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidCPF(cpf: string): boolean {
  const formattedCPF = cpf.replace(/[^\d]/g, '')

  if (formattedCPF.length !== 11 || !!formattedCPF.match(/(\d)\1{10}/)) {
    return false
  }

  const digits = formattedCPF.split('').map((el) => +el)

  function getVerifyingDigit(arr: number[]): number {
    const reducer = (sum: number, digit: number, index: number) =>
      sum + digit * (arr.length + 1 - index)
    const reduced = arr.reduce(reducer, 0)
    return ((reduced * 10) % 11) % 10
  }

  return (
    getVerifyingDigit(digits.slice(0, 9)) === digits[9] &&
    getVerifyingDigit(digits.slice(0, 10)) === digits[10]
  )
}

export function refinePhone(value: string): boolean {
  return value.length === 11
}

export function removeNonDigits(value: string): string {
  return value.replace(/\D/g, '')
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function isValidPrice(price: string): boolean {
  return !!price.match(/^\d+(\.\d{1,2})?$/)
}
