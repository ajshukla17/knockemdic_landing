import { LegalDocument } from './types';

export const privacyPolicyContent: LegalDocument = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  subtitle: 'How KnockMedic collects, uses, protects, and handles your personal and health information.',
  lastUpdated: 'August 1, 2026',
  metaDescription:
    'KnockMedic Privacy Policy - Learn how we process personal data, GPS location for ambulance dispatch, and electronic health records under India DPDP Act 2023.',
  draftNotice:
    'DRAFT FOR LEGAL REVIEW: This Privacy Policy has been prepared for the KnockMedic platform operating in India. It must be reviewed by qualified legal counsel familiar with the Digital Personal Data Protection (DPDP) Act 2023 and healthcare regulations prior to public deployment.',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction & Scope',
      content:
        'KnockMedic Health Technologies Pvt Ltd ("KnockMedic", "we", "us", or "our") operates the KnockMedic mobile application and website connecting patients in India with registered medical practitioners, hospitals, diagnostic laboratories, and ambulance service providers.\n\nThis Privacy Policy explains how we collect, process, store, and safeguard your Personal Data and Sensitive Personal Data or Information (SPDI) in compliance with the Digital Personal Data Protection (DPDP) Act 2023, Information Technology Act 2000, and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011.',
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content:
        'We collect information to provide healthcare services, enable emergency ambulance dispatch, and ensure teleconsultation quality:\n\n• Account & Profile Information: Name, phone number, email address, age, gender, blood group, emergency contact details, and government-issued ID (when required for prescription verification).\n• Precise Location Data: Real-time GPS location collected strictly when requesting 24/7 Ambulance SOS dispatch or locating nearby doctors and NABL-accredited diagnostic labs.\n• Electronic Health Records (EHR) & Clinical Data: Medical history, symptom checker inputs, uploaded diagnostic reports, e-prescriptions generated during consultations, and consultation summaries.\n• Payment & Transaction Information: Transaction IDs, billing addresses, and payment status via PCI-DSS compliant gateways (e.g. Razorpay). We do not store raw credit card numbers or UPI PINs.\n• Technical & Usage Data: IP address, device identifier, app crash logs, and browser cookies used for session authentication.',
    },
    {
      id: 'how-we-use-information',
      title: '3. Purpose of Processing',
      content:
        'Your data is processed strictly for legitimate healthcare and operational purposes:\n\n• Facilitating video and in-person consultations with NMC-registered medical practitioners.\n• Transmitting real-time GPS coordinates to nearest 108 and private ICU/BLS ambulance units during SOS emergency triggers.\n• Scheduling doorstep lab sample collection and delivering digital diagnostic reports.\n• Running AI Symptom Triage checks to provide preliminary health guidance.\n• Sending consultation reminders, follow-up alerts, and prescription notifications.\n• Ensuring compliance with National Medical Commission (NMC) Telemedicine Practice Guidelines.',
    },
    {
      id: 'data-sharing-third-parties',
      title: '4. Third-Party Data Sharing',
      content:
        'KnockMedic does not sell or rent your personal health data to advertisers. We share data only with authorized entities necessary to deliver requested care services:\n\n• Healthcare Providers: Assigned registered doctors, hospitals, and paramedics gain temporary encrypted access to your relevant medical profile during an active consultation or emergency.\n• Diagnostic Laboratories: Partner NABL labs (e.g. Thyrocare, Dr. Lal PathLabs) receive sample collection details and patient demographic information.\n• Ambulance Network: Emergency dispatch personnel receive your phone number and precise GPS coordinates upon SOS trigger.\n• Payment Gateways: Encrypted transaction amounts and order IDs are shared with licensed payment aggregators.\n• Legal & Regulatory Authorities: Shared only when mandated by court orders, statutory investigations, or public health emergency directives under Indian law.\n\nFor details on our infrastructure safeguards, please refer to our Data Security Framework at /hipaa-disha-data-security.',
    },
    {
      id: 'data-retention',
      title: '5. Data Retention & Archival',
      content:
        'We retain Electronic Health Records and consultation logs for a minimum of 3 years in accordance with NMC Telemedicine Practice Guidelines and medical record standards. Account details are retained as long as your account remains active or as required by statutory tax and healthcare recordkeeping mandates in India.',
    },
    {
      id: 'user-rights',
      title: '6. User Rights Under DPDP Act 2023',
      content:
        'Under India\'s Digital Personal Data Protection Act 2023, you hold the following rights regarding your Personal Data:\n\n• Right to Access: Request a summary of your personal data processed by KnockMedic.\n• Right to Correction & Erasure: Request correction of inaccurate health data or deletion of non-mandatory account information.\n• Right to Grievance Redressal: Register privacy concerns directly with our designated Data Protection Officer.\n• Right to Nominate: Designate an authorized representative to exercise data rights in the event of incapacity.',
    },
    {
      id: 'cookies-tracking',
      title: '7. Cookies & Analytics',
      content:
        'We use essential session cookies to keep you signed in securely and performance cookies to analyze web traffic. You may disable non-essential cookies through your browser settings, though certain interactive features may be affected.',
    },
    {
      id: 'childrens-privacy',
      title: '8. Children\'s Privacy',
      content:
        'Services for minors (under 18 years of age) must be created and managed under the direct supervision of a parent or legal guardian. Pediatric consultations require verified parental consent before video initiation.',
    },
    {
      id: 'contact-dpo',
      title: '9. Contact Us & Grievance Redressal',
      content:
        'If you have questions, concerns, or requests regarding this Privacy Policy, please contact our Data Protection Officer:\n\nKnockMedic Data Protection Office\nEmail: privacy@knockmedic.com\nAddress: Indiranagar, 100 Feet Road, Bengaluru, KA 560038\nResponse Window: Within 7 business days as mandated by DPDP guidelines.',
    },
  ],
};
