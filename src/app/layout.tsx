import type { Metadata } from 'next';
import './globals.css';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { ContactFormOverlay } from '@/components/ContactFormOverlay';

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
      <body className="antialiased">
        <ContactFormProvider>
          {children}
          <ContactFormOverlay />
        </ContactFormProvider>
      </body>
    </html>
  );
}
