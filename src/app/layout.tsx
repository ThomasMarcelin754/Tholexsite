import type { Metadata } from 'next';
import React from 'react';

import './globals.css';

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
      <body className="min-h-full bg-background text-foreground font-sans">
        <a href="#main" className="skip-to-content">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
