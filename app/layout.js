import './globals.css'

export const metadata = {
  title: 'Premium Next App',
  description: 'Tailwind CSS로 업그레이드된 페이지',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
