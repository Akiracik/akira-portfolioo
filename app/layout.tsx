import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { ThemeProvider } from '@/components/shared/theme-provider';
import Footer from '@/components/shared/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Akira | Creative Developer & Designer',
  description: 'Akira is a creative developer and designer specializing in building exceptional digital experiences.',
  themeColor: '#0f0f0f',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akira.dev',
    title: 'Akira | Creative Developer & Designer',
    description: 'Akira is a creative developer and designer specializing in building exceptional digital experiences.',
    images: [
      {
        url: 'https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless',
        width: 128,
        height: 128,
        alt: 'Akira - Creative Developer & Designer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akira | Creative Developer & Designer',
    description: 'Akira is a creative developer and designer specializing in building exceptional digital experiences.',
    images: ['https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}