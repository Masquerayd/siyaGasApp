'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ExportReport() {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      // Implement report generation and export logic here
      // This is a placeholder for the actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating export process
      const csvContent = "data:text/csv;charset=utf-8,Name,Surname,Price per kg,3kg,5kg,9kg,19kg,48kg,Wholesale,Total Amount,Cash,Card,EFT,Credit\nJohn,Doe,10,2,1,0,1,0,0,100,50,50,0,0\n"
      const encodedUri = encodeURI(csvContent)
      const link = document.createElement("a")
      link.setAttribute("href", encodedUri)
      link.setAttribute("download", "sales_report.csv")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error exporting report:', error)
      alert('Failed to export report. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Export Report</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generate and Export Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Click the button below to generate and export the sales report as a CSV file.</p>
          <Button onClick={handleExport} disabled={isExporting}>
            {isExporting ? 'Exporting...' : 'Export Report
</ReactProject>

I'll create a Progressive Web App (PWA) for your sales tracking application with the features you've described. We'll use Next.js for the frontend, and integrate with Google Sheets for data storage. Let's start by setting up the basic structure and then implement the features one by one.

<ReactProject id="SalesTrackingApp">

First, let's set up the basic structure of our app:

```tsx file="app/layout.tsx"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sales Tracking App',
  description: 'Track gas sales and inventory',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
