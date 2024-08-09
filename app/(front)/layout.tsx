import MegaMenu from '@/components/common/MegaMenu'
import Navbar from '@/components/common/Navbar'
import React, { type ReactNode } from 'react'

const LayoutFront = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-5xl py-6">
        <MegaMenu />
      </div>
      {children}
    </main>
  )
}

export default LayoutFront
