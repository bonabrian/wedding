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
    date: 'April 20, 2024 08:00:00 UTC+07:00',
    place: {
      location: 'GPdI Baithani Pangalengan',
      address:
        'Jl. Situ Cileunca No.34, Sidamukti Kidul RT 07/05, Pangalengan, Kec. Pangalengan, Bandung Selatan, Jawa Barat 40378',
      map: 'https://maps.app.goo.gl/8HH4bnY8YUjQNuYS7',
    },
  },
  {
    name: 'reception',
    date: 'April 20, 2024 11:00:00 UTC+07:00',
    place: {
      location: 'Gedung R.A. Wiriadinata',
      address:
        'Jl. Terusan Kopo No.Km, RW.5, Sulaiman, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40222',
      map: 'https://maps.app.goo.gl/TKZrWEQSYYT4PrPi7',
    },
  },
]
