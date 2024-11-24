'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PinLogin from '@/components/PinLogin'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const lastLogin = localStorage.getItem('lastLogin')
    const today = new Date().toDateString()
    if (lastLogin === today) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    localStorage.setItem('lastLogin', new Date().toDateString())
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <PinLogin onLogin={handleLogin} />
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Tracking App</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link href="/sales">
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
            </CardHeader>
            <CardContent>Make a sale to a client</CardContent>
          </Card>
        </Link>
        <Link href="/customers">
          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
            </CardHeader>
            <CardContent>Manage customer list</CardContent>
          </Card>
        </Link>
        <Link href="/cylinder-count">
          <Card>
            <CardHeader>
              <CardTitle>Cylinder Count</CardTitle>
            </CardHeader>
            <CardContent>Record cylinder inventory</CardContent>
          </Card>
        </Link>
        <Link href="/oc-stock">
          <Card>
            <CardHeader>
              <CardTitle>O/C Stock</CardTitle>
            </CardHeader>
            <CardContent>Record opening/closing stock</CardContent>
          </Card>
        </Link>
        <Link href="/gas-bought">
          <Card>
            <CardHeader>
              <CardTitle>Gas Bought</CardTitle>
            </CardHeader>
            <CardContent>Record gas purchases</CardContent>
          </Card>
        </Link>
        <Link href="/export-report">
          <Card>
            <CardHeader>
              <CardTitle>Export Report</CardTitle>
            </CardHeader>
            <CardContent>Generate and export reports</CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
}
