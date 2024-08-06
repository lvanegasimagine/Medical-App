import Navbar from '@/components/common/Navbar'
import React, { type ReactNode } from 'react'

const LayoutFront = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default LayoutFront
