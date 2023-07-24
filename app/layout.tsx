import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Portfolio Rodolphe',
  description: 'Mon Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="background-gradient overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
