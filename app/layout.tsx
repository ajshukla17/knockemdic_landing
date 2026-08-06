import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { BRAND_CONFIG } from '@/lib/constants';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://knockmedic.com'),
  title: {
    default: 'KnockMedic – Doctors, Hospitals, Lab Tests & Ambulance Booking Online in India',
    template: '%s | KnockMedic',
  },
  description:
    'Book doctor appointments online, request 24/7 emergency ambulance SOS, and schedule home lab tests across India on KnockMedic.',
  authors: [{ name: 'KnockMedic Health Technologies' }],
  icons: {
    icon: [
      { url: '/images/knockemdic_logo.jpg', type: 'image/jpeg' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#FAFAFA] text-[#0F172A] selection:bg-[#E6F4F1] selection:text-[#0D5C53]">
        {children}
      </body>
    </html>
  );
}
