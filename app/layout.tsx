import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
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
    url: 'https://www.sistemajobb.com.br/',
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
  verification: {
    google: 'COLOQUE_SEU_CODIGO_GOOGLE_SITE_VERIFICATION_AQUI',
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
        
        {/* Adicione os códigos (GTM / GA) substituindo os valores abaixo pela conta real */}
        <GoogleTagManager gtmId="GTM-SEU_ID_AQUI" />
        <GoogleAnalytics gaId="G-SEU_ID_AQUI" />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'COLOQUE_SEU_FB_PIXEL_ID_AQUI');
            fbq('track', 'PageView');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
