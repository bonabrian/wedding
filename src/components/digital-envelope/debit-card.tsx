'use client'

import Image from 'next/image'
import { useState } from 'react'

import type { BankAccount } from '@/data/bride'
import { cn } from '@/lib/utils'

import { Copy } from '../icons'

interface DebitCardProps {
  bankAccount: BankAccount
}

const DebitCard = ({ bankAccount }: DebitCardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bankAccount.number)
      setIsCopied(true)

      setTimeout(() => setIsCopied(false), 500)
    } catch (err) {
      setIsCopied(false)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col bg-white py-4 px-8 rounded-xl shadow-xl items-center justify-center',
      )}
    >
      <Image
        src={bankAccount.logo}
        width={160}
        height={20}
        alt={bankAccount.name}
        className={cn('object-cover')}
      />
      <div className={cn('flex flex-col gap-4 items-center')}>
        <div className={cn('flex flex-col justify-center items-center')}>
          <p className={cn('text-secondary text-lg')}>a/n {bankAccount.name}</p>
          <p className={cn('font-bold text-xl text-foreground')}>
            {bankAccount.number}
          </p>
        </div>
        <button
          className={cn(
            'inline-flex items-center gap-2 border-2 px-3.5 py-1.5 bg-input border-white rounded-md text-white transition-colors duration-150 ease-in-out',
            'hover:bg-input/90',
          )}
          onClick={copyToClipboard}
        >
          {isCopied ? (
            'Berhasil disalin'
          ) : (
            <>
              <Copy />
              Salin
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default DebitCard
