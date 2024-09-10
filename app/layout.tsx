import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Components
import { Providers } from './_lib/providers';
import Navbar from './_navigation/navbar';
import Footer from './_navigation/footer';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Redline Labs';
const APP_DEFAULT_TITLE = 'Redline Labs – Validating Unmet Needs';
const APP_TITLE_TEMPLATE = '%s – Redline Labs';
const APP_DESCRIPTION =
  'Redline pressure tests unmet needs for potential spinout opportunities, the rest get redlined.';

export const metadata: Metadata = {
  metadataBase: new URL('https://redlinelabs.co/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  category: 'Business',
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      'https://cdn.midjourney.com/aad85ee6-c0de-4d91-baab-0effc5257b81/0_0.png',
    ],
  },
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
