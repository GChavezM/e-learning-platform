import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { spaceGrotesk } from '@/lib/fonts';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'PyMission Control',
  description: 'Una plataforma moderna de e-learning para programacion en Python',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
