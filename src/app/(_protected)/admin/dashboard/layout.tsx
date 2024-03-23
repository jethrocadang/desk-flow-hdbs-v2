import React from 'react'
import SideNav from '@/components/ui/toplevelComponents/SideNav'
import Header from '@/components/ui/toplevelComponents/Header'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* topnav */}
      <div className='flex flex-row'>
        <SideNav />
        <div className=" w-full">
          <Header>Desk Management</Header>
          <div>
           {children}
          </div>
        </div>
      </div>
    </section>
  )
}