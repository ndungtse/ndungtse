import '../globals.css'

export const metadata = {
  title: 'Ndungutse Charles - Full Stack Developer',
  description: 'A full-stack developer based in Kigali, Rwanda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}