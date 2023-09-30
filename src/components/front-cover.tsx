import cn from '@/lib/cn'

import { Envelope } from './icons'

interface FrontCoverProps {
  maleName: string
  femaleName: string
  guestName: string
  date: Date
}

const FrontCover = ({
  maleName,
  femaleName,
  guestName,
  date,
}: FrontCoverProps) => {
  const day = date.getDate()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = date.getFullYear()

  return (
    <section
      className={cn(
        'flex items-center justify-center fixed bottom-0 left-0 h-screen w-screen',
      )}
    >
      <div className={cn('flex items-center p-0 w-screen h-screen')}>
        <div
          className={cn(
            'bg-front-cover bg-center bg-no-repeat bg-cover h-screen p-16 w-full',
          )}
        >
          <div
            className={cn('absolute top-0 left-0 h-full w-full bg-black/70')}
          />
          <div className={cn('flex items-center relative mx-auto h-full')}>
            <div
              className={cn(
                'flex flex-col justify-center items-center w-full font-cormorant-upright',
              )}
            >
              <div className={cn('text-center mb-16')}>
                <h1 className={cn('text-red text-5xl')}>Undangan Pernikahan</h1>
                <p className={cn('text-white text-3xl font-bold')}>
                  {day} . {month} . {year}
                </p>
              </div>
              <div className={cn('text-center mb-16 text-9xl')}>
                <h1 className={cn('text-red font-semibold tracking-tight')}>
                  {maleName} & {femaleName}
                </h1>
              </div>
              <div className={cn('text-center mb-8 text-3xl')}>
                <p className={cn('text-white')}>Kepada Yth:</p>
                <p className={cn('text-red')}>{guestName}</p>
              </div>
              <div>
                <button
                  className={cn(
                    'bg-red text-white py-2 px-4 rounded-md flex gap-2 items-center',
                  )}
                >
                  <Envelope />
                  <span>Buka Undangan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontCover
