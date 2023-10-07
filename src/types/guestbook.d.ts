import type { Guest } from './guest'

export interface Guestbook {
  id: number
  message: string
  createdAt: Date
  guest: Guest
}
