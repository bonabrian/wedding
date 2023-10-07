import type { Guest } from '@/types/guest'

import useRequest from './use-request'

const useGuest = (slug: string) => {
  try {
    const {
      data: guest,
      loading,
      error,
    } = useRequest<Guest>(`/api/guest/${slug}`)

    return { guest, loading, error }
  } catch (err) {
    throw err
  }
}

export default useGuest
