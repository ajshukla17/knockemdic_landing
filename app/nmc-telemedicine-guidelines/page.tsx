import type { Metadata } from 'next';
import { nmcTelemedicineGuidelinesContent } from '@/content/legal/nmc-telemedicine-guidelines';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'NMC Telemedicine Practice Guidelines Compliance | KnockMedic',
  description: nmcTelemedicineGuidelinesContent.metaDescription,
};

export default function NMCTelemedicinePage() {
  return <LegalPageLayout document={nmcTelemedicineGuidelinesContent} />;
}
