import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tholex',
  description: 'Landing page Tholex — rollup français.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.variable} min-h-full bg-background text-foreground font-sans`}>
        <a href="#main" className="skip-to-content">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
