import './globals.css';

export const metadata = {
  title: 'Portfolio Rodolphe',
  description: 'Mon Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
