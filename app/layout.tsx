import type { Metadata } from 'next';
import './globals.css';
import { spaceGrotesk } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'PyMission Control',
  description: 'A modern e-learning platform for python programming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} text-slate-900 antialiased dark:text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
