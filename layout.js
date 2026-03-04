import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Yash Bhansali | Curious Builder',
  description: 'A curious builder exploring technology, systems, AI, and ideas. Portfolio of Yash Bhansali.',
  keywords: ['portfolio', 'technology', 'AI', 'automation', 'data systems', 'cybersecurity'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  )
}
