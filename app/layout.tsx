import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jobb - Gestão de produtoras audiovisual',
  description: 'Do orçamento ao financeiro, tudo em um único lugar!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${albertSans.variable}`}>
      <body className="font-sans antialiased bg-[#121214] text-white selection:bg-[#F25D27] selection:text-white">
        {children}
      </body>
    </html>
  );
}
