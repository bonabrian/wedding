import { useEffect } from 'react'

const useTrackGuestVisit = ({
  slug,
  source,
}: {
  slug?: string
  source?: string | null
}) => {
  useEffect(() => {
    const addGuestVisit = async (_slug?: string, _source?: string | null) => {
      await fetch(`/api/guest/${_slug}/visit`, {
        method: 'POST',
        body: JSON.stringify({ guest: _slug, source: _source }),
      })
    }

    addGuestVisit(slug, source)
  }, [slug, source])
}

export default useTrackGuestVisit
