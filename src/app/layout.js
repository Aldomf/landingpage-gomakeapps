import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <style>{montserrat.styles}</style>
      </head>
      <body className='{montserrat.className}'>{children}</body>
    </html>
  )
}
