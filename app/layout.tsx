// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Svg To Image - Convert SVG to PNG",
//   description: "Convert and download SVG to PNG image online",
//   icons: [
//     { url: '/favicon.ico', sizes: 'any' },
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }



import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FileImage, FileText, Clock } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Micro Tools Hub',
  description: 'A collection of useful micro tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md">
            <nav className="mt-5">
              <Link href="/" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
                Home
              </Link>
              <Link href="/svg-to-png" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200">
                <FileImage className="mr-2 h-5 w-5" />
                SVG to PNG
              </Link>
              <Link href="/text-compare" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200">
                <FileText className="mr-2 h-5 w-5" />
                Text Compare
              </Link>
              <Link href="/epoch-converter" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200">
                <Clock className="mr-2 h-5 w-5" />
                Epoch Converter
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
