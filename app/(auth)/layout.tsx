/**
 * @file This file exports a React component called RootLayout that wraps the children components with ClerkProvider and sets the language of the HTML document to English.
 * It also exports an object called metadata that contains the title of the page.
 * @module components/layout
 */
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

/**
 * The Inter font with the latin subset.
 */
const inter = Inter({subsets: ['latin']});

/**
 * An object containing the title of the page.
 */
export const metadata = {
  title: 'Next.js 13 with Clerk',
}
 
/**
 * A React component that wraps the children components with ClerkProvider and sets the language of the HTML document to English.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children components to be wrapped.
 * @returns {JSX.Element} - The JSX element representing the RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark1`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}