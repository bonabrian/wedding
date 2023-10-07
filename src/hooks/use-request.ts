import type { MutatorCallback, SWRConfiguration } from 'swr'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import type { ErrorException } from '@/types/error'

interface SwrData<T = unknown> {
  data?: T
  loading: boolean
  error?: string | Error | null
  mutate: (
    date?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>
}

const useRequest = <T>(
  url: string,
  options?: SWRConfiguration,
): SwrData<T | ErrorException> => {
  const { data, isLoading, error, mutate } = useSWR<T | ErrorException>(
    url,
    fetcher,
    options,
  )

  const exception = error as ErrorException

  return {
    data,
    error: exception,
    mutate,
    loading: isLoading,
  }
}

export default useRequest
