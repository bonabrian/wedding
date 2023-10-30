import useRSVP from '@/hooks/use-rsvp'
import cn from '@/lib/cn'
import type { Guest } from '@/types/guest'

import BackgroundPattern from '../background-pattern'
import Heading from '../heading'
import type { RSVPFormBody } from './rsvp-form'
import RSVPForm from './rsvp-form'

interface RSVPProps {
  guest?: Guest
}

const RSVP = ({ guest }: RSVPProps) => {
  const { addRSVP } = useRSVP()

  const handleOnSubmit = async (body: RSVPFormBody) => {
    try {
      const { numberOfGuest, attendance } = body
      await addRSVP({ slug: guest?.slug, numberOfGuest, attendance })
    } catch (err) {
      console.error('An error occurred handleOnSubmit: ', err)
    }
  }

  return (
    <BackgroundPattern coloredPattern>
      <Heading title="RSVP" inverseColor />
      <div className={cn('flex flex-col z-10')}>
        <RSVPForm onSubmit={handleOnSubmit} />
      </div>
    </BackgroundPattern>
  )
}

export default RSVP
