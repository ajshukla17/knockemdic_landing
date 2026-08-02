import type { Metadata } from 'next';
import { privacyPolicyContent } from '@/content/legal/privacy-policy';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | KnockMedic India',
  description: privacyPolicyContent.metaDescription,
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout document={privacyPolicyContent} />;
}
