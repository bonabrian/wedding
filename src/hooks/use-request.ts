import type { MutatorCallback, SWRConfiguration } from 'swr'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

interface SwrData<T = unknown> {
  data?: T
  loading: boolean
  error?: string | Error | null
  mutate: (
    date?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>
}

const useRequest = <T>(url: string, options?: SWRConfiguration): SwrData<T> => {
  const { data, isLoading, error, mutate } = useSWR<T>(url, fetcher, options)

  return {
    data,
    error,
    mutate,
    loading: isLoading,
  }
}

export default useRequest
