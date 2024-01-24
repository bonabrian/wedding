export interface BankAccount {
  name: string
  number: string
  logo: string
}

interface Bride {
  nickName: string
  fullName: string
  type: 'groom' | 'bride'
  fatherName: string
  motherName: string
  image: string
  bankAccount: BankAccount
}

export const groom: Bride = {
  nickName: 'Bona',
  fullName: 'Bona Brian Siagian',
  type: 'groom',
  fatherName: 'Bpk. Salomo Siagian',
  motherName: 'Ibu Monika Purba',
  image: '/images/groom.jpg',
  bankAccount: {
    name: 'Bona Brian Siagian',
    number: '12345678',
    logo: '/images/bca.png',
  },
}

export const bride: Bride = {
  nickName: 'Silvia',
  fullName: 'Silvia Novianty Sitorus',
  type: 'bride',
  fatherName: 'Bpk. Sarbini Sitorus',
  motherName: 'Ibu Elsa Agustina Sirait ✞',
  image: '/images/bride.jpg',
  bankAccount: {
    name: 'Silvia Novianty',
    number: '87654321',
    logo: '/images/bca.png',
  },
}
