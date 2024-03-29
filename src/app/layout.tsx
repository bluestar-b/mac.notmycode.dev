import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "bluestar",
  description: "nothing is impossible🚀",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-auto`}
      >
        {children}
      </body>
    </html>
  )
}
