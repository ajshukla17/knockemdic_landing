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
  metadataBase: new URL('https://knockmedic.in'),
  title: 'KnockMedic - Instant Doctor Appointments & 24/7 Ambulance SOS India',
  description:
    'KnockMedic connects patients across India with 15,000+ verified doctors, instant emergency ambulance dispatch (<10 min average ETA), home lab diagnostics, and AI symptom triage.',
  keywords: [
    'Doctor Booking India',
    'Ambulance SOS Dispatch',
    'Online Doctor Consultation',
    'Telemedicine India',
    'Lab Tests at Home',
    'KnockMedic App',
  ],
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
  openGraph: {
    title: 'KnockMedic - Healthcare That Comes To You',
    description:
      'Book doctor appointments, request instant 24/7 ambulance SOS, order lab tests at home, and get AI health guidance across India.',
    url: 'https://knockmedic.in',
    siteName: 'KnockMedic',
    images: [
      {
        url: BRAND_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'KnockMedic - Official Brand Logo & Emergency Dispatch Network',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KnockMedic - Emergency Ambulance SOS & Verified Doctors',
    description: 'Instant healthcare booking and 24/7 emergency dispatch in India.',
    images: [BRAND_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
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
