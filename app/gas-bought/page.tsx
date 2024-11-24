'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function GasBought() {
  const [gasTankFilled, setGasTankFilled] = useState({
    startValue: '',
    startPercentage: '',
    endValue: '',
    endPercentage: '',
    density: '',
    gasLoadedKg: '',
  })

  const [gasBought, setGasBought] = useState({
    supplier: '',
    quantity: '',
    unitPrice: '',
  })

  const [gasBottleBought, setGasBottleBought] = useState({
    supplier: '',
    type: '',
    quantity: '',
    unitPrice: '',
  })

  const handleGasTankFilledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasTankFilled(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleGasBoughtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasBought(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleGasBottleBoughtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasBottleBought(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleGasTankFilledSubmit = () => {
    // Implement gas tank filled submission logic here
    console.log('Gas tank filled submitted', gasTankFilled)
  }

  const handleGasBoughtSubmit = () => {
    // Implement gas bought submission logic here
    console.log('Gas bought submitted', gasBought)
  }

  const handleGasBottleBoughtSubmit = () => {
    // Implement gas bottle bought submission logic here
    console.log('Gas bottle bought submitted', gasBottleBought)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gas Bought</h1>
      <Tabs defaultValue="gasTankFilled">
        <TabsList>
          <TabsTrigger value="gasTankFilled">Gas Tank Filled</TabsTrigger>
          <TabsTrigger value="gasBought">Gas Bought</TabsTrigger>
          <TabsTrigger value="gasBottleBought">Gas Bottle Bought</TabsTrigger>
        </TabsList>
        <TabsContent value="gasTankFilled">
          <Card>
            <CardHeader>
              <CardTitle>Gas Tank Filled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  name="startValue"
                  placeholder="Start Value"
                  value={gasTankFilled.startValue}
                  onChange={handleGasTankFilledChange}
                />
                <Input
                  name="startPercentage"
                  placeholder="Start Percentage"
                  value={gasTankFilled.startPercentage}
                  onChange={handleGasTankFilledChange}
                />
                <Input
                  name="endValue"
                  placeholder="End Value"
                  value={gasTankFilled.endValue}
                  onChange={handleGasTankFilledChange}
                />
                <Input
                  name="endPercentage"
                  placeholder="End Percentage"
                  value={gasTankFilled.endPercentage}
                  onChange={handleGasTankFilledChange}
                />
                <Input
                  name="density"
                  placeholder="Density (optional)"
                  value={gasTankFilled.density}
                  onChange={handleGasTankFilledChange}
                />
                <Input
                  name="gasLoadedKg"
                  placeholder="Gas Loaded (kg)"
                  value={gasTankFilled.gasLoadedKg}
                  onChange={handleGasTankFilledChange}
                />
                <Button onClick={handleGasTankFilledSubmit}>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gasBought">
          <Card>
            <CardHeader>
              <CardTitle>Gas Bought</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  name="supplier"
                  placeholder="Supplier"
                  value={gasBought.supplier}
                  onChange={handleGasBoughtChange}
                />
                <Input
                  name="quantity"
                  placeholder="Quantity"
                  value={gasBought.quantity}
                  onChange={handleGasBoughtChange}
                />
                <Input
                  name="unitPrice"
                  placeholder="Unit Price"
                  value={gasBought.unitPrice}
                  onChange={handleGasBoughtChange}
                />
                <Button onClick={handleGasBoughtSubmit}>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gasBottleBought">
          <Card>
            <CardHeader>
              <CardTitle>Gas Bottle Bought</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  name="supplier"
                  placeholder="Supplier"
                  value={gasBottleBought.supplier}
                  onChange={handleGasBottleBoughtChange}
                />
                <Input
                  name="type"
                  placeholder="Type"
                  value={gasBottleBought.type}
                  onChange={handleGasBottleBoughtChange}
                />
                <Input
                  name="quantity"
                  placeholder="Quantity"
                  value={gasBottleBought.quantity}
                  onChange={handleGasBottleBoughtChange}
                />
                <Input
                  name="unitPrice"
                  placeholder="Unit Price"
                  value={gasBottleBought.unitPrice}
                  onChange={handleGasBottleBoughtChange}
                />
                <Button onClick={handleGasBottleBoughtSubmit}>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
