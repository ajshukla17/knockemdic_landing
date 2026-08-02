export interface LegalSection {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface LegalDocument {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  metaDescription: string;
  draftNotice: string;
  sections: LegalSection[];
}
