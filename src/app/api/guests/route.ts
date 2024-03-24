import type { NextRequest } from 'next/server'

import { findAll } from '@/actions/guests'
import { getErrorMessage, response } from '@/lib/api'

export const GET = async (_req: NextRequest) => {
  try {
    const guests = await findAll()

    return response(guests ?? [])
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
