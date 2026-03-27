export const metadata = {
  title: 'My Vercel App',
  description: 'Created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
