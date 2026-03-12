import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jobb 4.0 - Gestão de produtoras audiovisual',
  description: 'Do orçamento ao financeiro, tudo em um único lugar! Sistema de gestão completo para produtoras.',
  keywords: ['gestão audiovisual', 'sistema produtora', 'orçamento vídeo', 'software para produtoras', 'Jobb 4.0'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Jobb 4.0 - Gestão de produtoras audiovisual',
    description: 'Do orçamento ao financeiro, tudo em um único lugar! Sistema de gestão completo para produtoras.',
    url: 'https://jobb.com.br',
    siteName: 'Jobb',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jobb 4.0 - Gestão de produtoras',
    description: 'Sistema de gestão completo para produtoras audiovisuais.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jobb 4.0',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    description: 'Sistema de gestão completo para produtoras audiovisuais. Do orçamento ao financeiro, tudo em um único lugar!',
    offers: {
      '@type': 'Offer',
      price: '199.00',
      priceCurrency: 'BRL',
    },
  };

  return (
    <html lang="pt-BR" className={`${albertSans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#232323] text-white selection:bg-[#F25D27] selection:text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
