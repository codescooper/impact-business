import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IMPACT BUSINESS | Génération de clients',
  description:
    'Impact Business accompagne les entreprises avec une approche hybride terrain + digital pour générer plus de clients.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
