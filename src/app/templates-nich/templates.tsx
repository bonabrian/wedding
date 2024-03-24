'use client'

import type { ChangeEvent } from 'react'
import { useState } from 'react'

import useGuests from '@/hooks/use-guests'

const Templates = () => {
  const { guests } = useGuests()
  const [searchVal, setSearchVal] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchVal(value)
  }

  const filteredGuests =
    guests?.filter((guest) =>
      guest.name.toLowerCase().includes(searchVal.toLowerCase()),
    ) ?? []

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
          {filteredGuests.map((guest) => (
            <div key={guest.id} className="flex flex-col gap-y-2">
              <div className="font-bold">{guest.name}</div>
              <div className="border p-4 space-y-4">
                <p>Halo *{guest.name}* 👋</p>
                <p>
                  Dengan penuh sukacita dan kebahagiaan, kami dengan rendah hati
                  mengundang Anda untuk berbagi momen spesial dalam rencana
                  pernikahan kami:
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
              </div>
            </div>
          ))}
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
