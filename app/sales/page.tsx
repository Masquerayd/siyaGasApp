'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Sales() {
  const [client, setClient] = useState('')
  const [item, setItem] = useState('')
  const [pricePerUnit, setPricePerUnit] = useState('')
  const [quantity, setQuantity] = useState('')
  const [cart, setCart] = useState<Array<{ item: string; quantity: number; price: number }>>([])

  const handleAddToCart = () => {
    const price = eval(pricePerUnit)
    const qty = eval(quantity)
    if (isNaN(price) || isNaN(qty)) {
      alert('Invalid price or quantity')
      return
    }
    setCart([...cart, { item, quantity: qty, price }])
    setItem('')
    setPricePerUnit('')
    setQuantity('')
  }

  const handleCompleteSale = () => {
    // Implement sale completion logic here
    console.log('Sale completed', { client, cart })
    // Reset the form
    setClient('')
    setCart([])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Sale</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search or enter client name"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <Link href="/add-client">
            <Button>+</Button>
          </Link>
        </div>
        <Select value={item} onValueChange={setItem}>
          <SelectTrigger>
            <SelectValue placeholder="Select item" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3kg">3kg</SelectItem>
            <SelectItem value="5kg">5kg</SelectItem>
            <SelectItem value="9kg">9kg</SelectItem>
            <SelectItem value="19kg">19kg</SelectItem>
            <SelectItem value="48kg">48kg</SelectItem>
            <SelectItem value="wholesale">Wholesale</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Price per unit"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          onBlur={() => {
            try {
              const result = eval(pricePerUnit)
              setPricePerUnit(result.toString())
            } catch (error) {
              alert('Invalid arithmetic expression')
            }
          }}
        />
        <Input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          onBlur={() => {
            try {
              const result = eval(quantity)
              setQuantity(result.toString())
            } catch (error) {
              alert('Invalid arithmetic expression')
            }
          }}
        />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Cart</h2>
        {cart.map((item, index) => (
          <Card key={index} className="mb-2">
            <CardContent className="flex justify-between items-center">
              <span>{item.item}</span>
              <span>{item.quantity} x ${item.price.toFixed(2)}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <Button onClick={handleCompleteSale} className="w-full">Complete Sale</Button>
      </div>
    </div>
  )
}
