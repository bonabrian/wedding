'use client'

import Link from 'next/link'
import type { ChangeEvent } from 'react'
import { useState } from 'react'

import { WhatsApp } from '@/components/icons'
import useGuests from '@/hooks/use-guests'
import { cn } from '@/lib/utils'

const Templates = () => {
  const { guests } = useGuests()
  const [searchVal, setSearchVal] = useState('')

  const generateWhatsappUrl = (phoneNumber: string, text: string) =>
    `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(text)}`

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchVal(value)
  }

  const filteredGuests =
    guests?.filter((guest) =>
      guest.name.toLowerCase().includes(searchVal.toLowerCase()),
    ) ?? []

  const textTemplate = `Halo *{guestName}* 👋\n\nDengan penuh sukacita dan kebahagiaan, kami dengan rendah hati mengundang Anda untuk berbagi momen spesial dalam rencana pernikahan kami:\n\n*Bona Brian Siagian*\n&\n*Silvia Novianty Sitorus*\n\n🎊 *Pemberkatan* akan dilangsungkan pada:\n🗓 *Sabtu, 20 April 2024*\n🕗 *09.00 WIB - 11.00 WIB*\n\n🥂 *Resepsi* akan diadakan pada:\n🗓 *Sabtu, 20 April 2024*\n🕗 *11.00 WIB - Selesai*\n\n📍 Tempat: *Gedung R.A Wiriadinata, Lanud Sulaiman, Kopo, Bandung*\n\nInformasi lengkap acara\nSilakan kunjungi undangan digital kami di:\n🌐 *https://bonasilvia.vercel.app/{slug}*\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nTerimakasih\n\nSalam,\n*Bona & Silvia*`

  return (
    <div className="max-w-xl mx-auto py-8 px-4 space-y-8">
      <input
        placeholder="Cari Nama"
        onChange={handleChange}
        value={searchVal}
        className="w-full"
      />
      {searchVal.length >= 3 ? (
        <>
          {filteredGuests.map((guest) => {
            const text = textTemplate
              .replace('{guestName}', guest.name)
              .replace('{slug}', guest.slug)

            const whatsappUrl = guest.phoneNumber
              ? generateWhatsappUrl(guest.phoneNumber, text)
              : undefined

            return (
              <div key={guest.id} className="flex flex-col gap-y-2">
                <div className="font-bold">{guest.name}</div>
                <div className="border p-4 space-y-4">
                  <p>Halo *{guest.name}* 👋</p>
                  <p>
                    Dengan penuh sukacita dan kebahagiaan, kami dengan rendah
                    hati mengundang Anda untuk berbagi momen spesial dalam
                    rencana pernikahan kami:
                  </p>
                  <p>
                    <span className="block">*Bona Brian Siagian*</span>
                    <span className="block">&</span>
                    <span className="block">*Silvia Novianty Sitorus*</span>
                  </p>
                  <p>
                    <span className="block">
                      🎊 *Pemberkatan* akan dilangsungkan pada:
                    </span>
                    <span className="block">🗓 *Sabtu, 20 April 2024*</span>
                    <span className="block">🕗 *09.00 WIB - 11.00 WIB*</span>
                  </p>
                  <p>
                    <span className="block">
                      🥂 *Resepsi* akan diadakan pada:
                    </span>
                    <span className="block">🗓 *Sabtu, 20 April 2024*</span>
                    <span className="block">🕗 *11.00 WIB - Selesai*</span>
                  </p>
                  <p>
                    📍 Tempat: *Gedung R.A Wiriadinata, Lanud Sulaiman, Kopo,
                    Bandung*
                  </p>
                  <p>
                    <span className="block">Informasi lengkap acara</span>
                    <span className="block">
                      Silakan kunjungi undangan digital kami di:
                    </span>
                    <span className="block">
                      🌐 *https://bonasilvia.vercel.app/{guest.slug}*
                    </span>
                  </p>
                  <p>
                    Merupakan suatu kebahagiaan bagi kami apabila
                    Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                  </p>
                  <p>Terima kasih~</p>
                  <p>
                    <span className="block">Salam,</span>
                    <span className="block">*Bona & Silvia*</span>
                  </p>
                  {whatsappUrl ? (
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      className="flex justify-between mt-4"
                    >
                      <button
                        className={cn(
                          'inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#25d366] rounded-md text-white transition-colors duration-150 ease-in-out',
                          'disabled:cursor-not-allowed disabled:opacity-70',
                        )}
                      >
                        <WhatsApp className="fill-white" />
                        Send via WhatsApp
                      </button>
                    </Link>
                  ) : null}
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <h1 className="p-4 text-center text-2xl">
          Cari berdasarkan nama tamu undangan
        </h1>
      )}
    </div>
  )
}

export default Templates
