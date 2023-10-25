import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

import { getErrorMessage, response } from '@/lib/api'

export const runtime = 'edge'

const plusJakartaSansLight = fetch(
  new URL(
    '../../../../assets/fonts/PlusJakartaSans-Light.ttf',
    import.meta.url,
  ),
).then((res) => res.arrayBuffer())

const plusJakartaSansBold = fetch(
  new URL('../../../../assets/fonts/PlusJakartaSans-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

const alexBrushRegular = fetch(
  new URL('../../../../assets/fonts/AlexBrush-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

export const GET = async (_req: NextRequest) => {
  const fontPlusJakartaSansLight = await plusJakartaSansLight
  const fontPlusJakartaSansBold = await plusJakartaSansBold
  const fontAlexBrushRegular = await alexBrushRegular

  try {
    return new ImageResponse(
      (
        <div
          tw="flex flex-col py-12 px-6 relative h-full"
          style={{ backgroundColor: '#fff' }}
        >
          <div tw="absolute top-0 right-0 flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="200"
              height="200"
              src="https://res.cloudinary.com/dg48wbt00/image/upload/v1698232347/flower-frame_q1qdke.png"
              alt="frame"
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
          <div tw="absolute bottom-0 left-0 flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="200"
              height="200"
              src="https://res.cloudinary.com/dg48wbt00/image/upload/v1698232347/flower-frame_q1qdke.png"
              alt="frame"
            />
          </div>
          <div
            tw="flex flex-col items-center justify-center"
            style={{ fontFamily: 'PlusJakartaSans-Light', fontSize: '12px' }}
          >
            <h2
              tw="my-0 uppercase"
              style={{
                fontFamily: 'PlusJakartaSans-Light',
                paddingBottom: '4px',
                borderBottom: '1px solid #000',
              }}
            >
              Undangan Pernikahan
            </h2>
          </div>
          <p
            tw="mb-8"
            style={{
              fontFamily: 'PlusJakartaSans-Light',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan
            kami.
          </p>
          <div
            tw="flex flex-col items-center justify-center"
            style={{
              fontFamily: 'AlexBrush-Regular',
              fontSize: '4rem',
            }}
          >
            <div
              style={{
                lineHeight: 0.75,
                letterSpacing: '0.05em',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            >
              Bona
            </div>
            <div
              style={{
                lineHeight: 0.5,
                letterSpacing: '0.05em',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            >
              &
            </div>
            <div
              style={{
                lineHeight: 0.75,
                letterSpacing: '0.05em',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            >
              Silvia
            </div>
          </div>

          <div tw="flex flex-col justify-center items-center mt-8">
            <div
              style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: '16px' }}
            >
              24.04.2024
            </div>
            <div
              style={{ fontSize: '12px', fontFamily: 'PlusJakartaSans-Light' }}
            >
              11:00 - 18:00 WIB
            </div>
          </div>
        </div>
      ),
      {
        width: 480,
        height: 480,
        fonts: [
          {
            name: 'PlusJakartaSans-Light',
            data: fontPlusJakartaSansLight,
            style: 'normal',
          },
          {
            name: 'PlusJakartaSans-Bold',
            data: fontPlusJakartaSansBold,
            style: 'normal',
          },
          {
            name: 'AlexBrush-Regular',
            data: fontAlexBrushRegular,
            style: 'normal',
          },
        ],
      },
    )
  } catch (err) {
    console.error('OG Image Generator: ', getErrorMessage(err))
    return response({ message: 'Failed to generate image' }, 500)
  }
}
