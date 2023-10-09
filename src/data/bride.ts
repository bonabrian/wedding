export interface BankAccount {
  name: string
  number: string
  logo: string
}

interface Bride {
  nickName: string
  fullName: string
  birthOrder: string
  fatherName: string
  motherName: string
  image: string
  bankAccount: BankAccount
}

export const groom: Bride = {
  nickName: 'Bona',
  fullName: 'Bona Brian Siagian',
  birthOrder: 'Putra',
  fatherName: 'Bpk. Salomo Siagian',
  motherName: 'Ibu Monika Purba',
  image: 'https://placehold.co/400x600/black/white',
  bankAccount: {
    name: 'Bona Brian Siagian',
    number: '12345678',
    logo: '/assets/images/bca.png',
  },
}

export const bride: Bride = {
  nickName: 'Silvia',
  fullName: 'Silvia Novianty Sitorus',
  birthOrder: 'Putri',
  fatherName: 'Bpk. Sarbini Sitorus',
  motherName: 'Ibu Elsa Agustina Sirait ✞',
  image: 'https://placehold.co/400x600/9f80ff/white',
  bankAccount: {
    name: 'Silvia Novianty',
    number: '87654321',
    logo: '/assets/images/bca.png',
  },
}
