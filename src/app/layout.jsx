import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
})

export const metadata = {
  title: 'Nombox',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
