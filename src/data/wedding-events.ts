interface Place {
  location: string
  address: string
  map: string
}

export interface WeddingEvent {
  name: string
  date: string
  place: Place
}

export const weddingEvents: WeddingEvent[] = [
  {
    name: 'ceremony',
    date: 'April 20, 2024 09:00:00 UTC+07:00',
    place: {
      location: 'Gedung R.A. Wiriadinata',
      address:
        'Jl. Terusan Kopo No.Km 9, RW.5, Sulaiman, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40222 (GPdI Baithani Pangalengan)',
      map: 'https://maps.app.goo.gl/TKZrWEQSYYT4PrPi7',
    },
  },
  {
    name: 'reception',
    date: 'April 20, 2024 11:30:00 UTC+07:00',
    place: {
      location: 'Gedung R.A. Wiriadinata',
      address:
        'Jl. Terusan Kopo No.Km 9, RW.5, Sulaiman, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40222',
      map: 'https://maps.app.goo.gl/TKZrWEQSYYT4PrPi7',
    },
  },
]
