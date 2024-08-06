import React, { type ReactNode } from 'react'

const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>
        <h2>I am Dashboard Only Page Layout</h2>
        {children}
      </div>
    </main>
  )
}

export default LayoutDashboard
