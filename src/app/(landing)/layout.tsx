import Header from '@/components/header'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
      <main className=' overflow-x-hidden'>
          <Header/>
          {children}
      </main>
  )
}
