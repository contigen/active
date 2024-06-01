import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Active － A real-time speech recognised to-do list enabled with AI',
  description:
    'get active by adding to-do taaks declaratively using Speech Recognition plus AI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
