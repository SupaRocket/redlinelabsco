import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Components
import { Providers } from './_lib/providers';
import Navbar from './_navigation/navbar';
import Footer from './_navigation/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Redline - Testing Unmet Needs',
  description:
    'Redline pressure tests unmet needs for potential spinout opportunities, the rest get redlined.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
