import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='py-6 bg-teal-900 text-blue-200'>
      {children}
    </div>
  )
}
