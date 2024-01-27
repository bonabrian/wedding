import type { Guest } from './guest'

export interface Guestbook {
  id?: string
  message: string
  createdAt: Date
  guest: Guest
}
