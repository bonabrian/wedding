import type { ErrorException } from '@/types/error'
import type { Guest } from '@/types/guest'

import useRequest from './use-request'

const useGuest = (slug: string) => {
  try {
    const {
      data: guest,
      loading,
      error,
    } = useRequest<Guest>(`/api/guest/${slug}`)

    const exception = error as ErrorException

    return { guest, loading, error: exception }
  } catch (err) {
    throw err
  }
}

export default useGuest
