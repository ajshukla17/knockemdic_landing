import type { Metadata } from 'next';
import { termsOfServiceContent } from '@/content/legal/terms-of-service';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | KnockMedic India',
  description: termsOfServiceContent.metaDescription,
};

export default function TermsOfServicePage() {
  return <LegalPageLayout document={termsOfServiceContent} />;
}
