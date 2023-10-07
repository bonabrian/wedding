import type { ErrorException } from '@/types/error'

const fetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T | ErrorException> => {
  const res = await fetch(input, init)

  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error() as ErrorException
    error.status = res.status
    error.message = errorRes

    throw error
  }

  return (await res.json()) as T
}

export default fetcher
