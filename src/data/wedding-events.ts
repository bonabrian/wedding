interface WeddingEvent {
  name: string
  place: string
  address: string
  map: string
}

export const weddingEvents: WeddingEvent[] = [
  {
    name: 'ceremony',
    place: 'GPdI Baithani Pangalengan',
    address:
      'Jl. Situ Cileunca No.34, Sidamukti Kidul RT 07/05, Pangalengan, Kec. Pangalengan, Bandung Selatan, Jawa Barat 40378',
    map: 'https://maps.app.goo.gl/8HH4bnY8YUjQNuYS7',
  },
  {
    name: 'reception',
    place: 'Gedung R.A. Wiriadinata',
    address:
      'Jl. Terusan Kopo No.Km, RW.5, Sulaiman, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40222',
    map: 'https://maps.app.goo.gl/TKZrWEQSYYT4PrPi7',
  },
]
