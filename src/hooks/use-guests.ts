import type { Guest } from '@/types/guest'

import useRequest from './use-request'

const useGuests = () => {
  const { data, loading, error } = useRequest<Guest[]>('/api/guests')

  return { guests: data, loading, error }
}

export default useGuests
