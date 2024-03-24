import type { Guest } from '@/types/guest'

import useRequest from './use-request'

const useGuest = (slug?: string) => {
  const {
    data: guest,
    loading,
    error,
  } = useRequest<Guest>(`/api/guests/${slug}`)

  return { guest, loading, error }
}

export default useGuest
