import React from 'react'

interface LayoutDetailProps {
    children: React.ReactNode;
}

export default function LayoutDetail({children}: LayoutDetailProps) {
  return (
    <div className='mx-auto'>
        {children}
    </div>
  )
}
