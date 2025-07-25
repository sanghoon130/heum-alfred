import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full h-full overflow-x-hidden" style={{ overscrollBehaviorY: 'none' }}>
      <head>

      </head>
      <body className={`antialiased w-full h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}