import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SynergyLab_ys4s',
  description: 'SynergyLab_ys4s is an innovative SaaS B2C application that aims to revolutionize workflow automation. It leverages intelligent automation and real-time analytics to help businesses streamline their operations and increase productivity. The application provides a user-friendly interface, seamless integration with existing systems, and advanced data visualization tools to give users a comprehensive overview of their workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}