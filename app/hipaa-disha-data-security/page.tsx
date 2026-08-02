import type { Metadata } from 'next';
import { hipaaDishaDataSecurityContent } from '@/content/legal/hipaa-disha-data-security';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'DISHA & HIPAA Data Security Framework | KnockMedic',
  description: hipaaDishaDataSecurityContent.metaDescription,
};

export default function HIPAADISHADataSecurityPage() {
  return <LegalPageLayout document={hipaaDishaDataSecurityContent} />;
}
