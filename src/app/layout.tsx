'use client'
import Header from "@/components/Header";
import "./globals.css";
import { usePathname } from 'next/navigation'
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body
        className={'flex flex-col h-[100vh]'}
      >
        <Header path={pathname} />
        <main className="flex-1 p-4 bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
