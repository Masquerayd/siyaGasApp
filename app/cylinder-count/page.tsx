'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const cylinderTypes = ['3kg', '5kg', '9kg', '19kg', '48kg']

export default function CylinderCount() {
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const lastCount = localStorage.getItem('lastCylinderCount')
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    if (!lastCount || new Date(lastCount) < oneWeekAgo) {
      setShowPopup(true)
    }
  }, [])

  const handleCount = (type: string, count: number) => {
    setCounts(prev => ({ ...prev, [type]: count }))
  }

  const handleSubmit = () => {
    // Implement count submission logic here
    console.log('Cylinder counts submitted', counts)
    localStorage.setItem('lastCylinderCount', new Date().toISOString())
    setShowPopup(false)
  }

  if (showPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Cylinder Count</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Please enter the current cylinder counts:</p>
            {cylinderTypes.map(type => (
              <div key={type} className="mb-2">
                <label className="block">{type}</label>
                <Input
                  type="number"
                  value={counts[type] || ''}
                  onChange={(e) => handleCount(type, parseInt(e.target.value))}
                />
              </div>
            ))}
            <Button onClick={handleSubmit} className="w-full mt-4">Let's Count!</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cylinder Count</h1>
      {cylinderTypes.map(type => (
        <Card key={type} className="mb-4">
          <CardHeader>
            <CardTitle>{type}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Previous count: {counts[type] || 0}</p>
            <p>Last counted: {localStorage.getItem('lastCylinderCount') || 'Never'}</p>
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => setShowPopup(true)}>Update Counts</Button>
    </div>
  )
}
