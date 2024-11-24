'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function OCStock() {
  const [stock, setStock] = useState({
    tankerValue: '',
    empty9kg: '',
    full9kg: '',
    empty19kg: '',
    full19kg: '',
    empty48kg: '',
    full48kg: '',
  })
  const [showPopup, setShowPopup] = useState(false)
  const [isOpening, setIsOpening] = useState(true)

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour >= 16) {
      setIsOpening(false)
      setShowPopup(true)
    } else if (!localStorage.getItem('openingStock')) {
      setIsOpening(true)
      setShowPopup(true)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    // Implement stock submission logic here
    console.log('Stock submitted', stock)
    if (isOpening) {
      localStorage.setItem('openingStock', JSON.stringify(stock))
    } else {
      localStorage.setItem('closingStock', JSON.stringify(stock))
      // Calculate and display differences here
    }
    setShowPopup(false)
  }

  if (showPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>{isOpening ? 'Opening' : 'Closing'} Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                name="tankerValue"
                placeholder="Tanker Value"
                value={stock.tankerValue}
                onChange={handleInputChange}
              />
              <Input
                name="empty9kg"
                placeholder="Empty 9kg Cylinders"
                value={stock.empty9kg}
                onChange={handleInputChange}
              />
              <Input
                name="full9kg"
                placeholder="Full 9kg Cylinders"
                value={stock.full9kg}
                onChange={handleInputChange}
              />
              <Input
                name="empty19kg"
                placeholder="Empty 19kg Cylinders"
                value={stock.empty19kg}
                onChange={handleInputChange}
              />
              <Input
                name="full19kg"
                placeholder="Full 19kg Cylinders"
                value={stock.full19kg}
                onChange={handleInputChange}
              />
              <Input
                name="empty48kg"
                placeholder="Empty 48kg Cylinders"
                value={stock.empty48kg}
                onChange={handleInputChange}
              />
              <Input
                name="full48kg"
                placeholder="Full 48kg Cylinders"
                value={stock.full48kg}
                onChange={handleInputChange}
              />
              <Button onClick={handleSubmit} className="w-full">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Opening/Closing Stock</h1>
      <Button onClick={() => setShowPopup(true)}>Record Stock</Button>
    </div>
  )
}
