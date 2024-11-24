'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface PinLoginProps {
  onLogin: () => void
}

export default function PinLogin({ onLogin }: PinLoginProps) {
  const [pin, setPin] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin === '1234') {
      onLogin()
    } else {
      alert('Incorrect PIN')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">Enter PIN</h2>
        <Input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength={4}
          className="text-center text-2xl"
        />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  )
}
