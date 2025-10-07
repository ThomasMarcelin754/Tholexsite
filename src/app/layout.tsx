import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tholex',
  description: 'Holding familial dédié aux PME françaises',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
