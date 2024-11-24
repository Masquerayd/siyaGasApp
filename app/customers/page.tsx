'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for demonstration
const mockCustomers = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
  // Add more mock customers as needed
]

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <Input
        placeholder="Search customers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {filteredCustomers.map(customer => (
            <Card key={customer.id} className="mb-2 cursor-pointer" onClick={() => setSelectedCustomer(customer)}>
              <CardContent className="p-4">
                <h3 className="font-bold">{customer.name}</h3>
                <p>{customer.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          {selectedCustomer && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedCustomer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Phone: {selectedCustomer.phone}</p>
                {/* Add more customer details here */}
                <Button className="mt-4">Delete Customer</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
