import type { Metadata } from 'next';
import { termsOfServiceContent } from '@/content/legal/terms-of-service';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: termsOfServiceContent.metaDescription,
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | KnockMedic India',
    description: termsOfServiceContent.metaDescription,
    url: 'https://knockmedic.in/terms-of-service',
  },
  twitter: {
    title: 'Terms of Service | KnockMedic India',
    description: termsOfServiceContent.metaDescription,
  },
};

export default function TermsOfServicePage() {
  return <LegalPageLayout document={termsOfServiceContent} />;
}
