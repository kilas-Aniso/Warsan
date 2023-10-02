
'use client'
import './globals.css'

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Amaranth:wght@400;700&family=Inria+Sans:wght@400;700&family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <div>
        </div>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  )
}