import { LegalDocument } from './types';

export const hipaaDishaDataSecurityContent: LegalDocument = {
  slug: 'hipaa-disha-data-security',
  title: 'DISHA & HIPAA-Equivalent Data Security Framework',
  subtitle: 'Technical architecture, encryption standards, and health data protection safeguards operating in India.',
  lastUpdated: 'August 1, 2026',
  metaDescription:
    'KnockMedic Data Security Framework - Learn about our DISHA and DPDP 2023 compliance, AES-256 encryption, Indian data residency, and HIPAA-equivalent security safeguards.',
  draftNotice:
    'DRAFT FOR SECURITY & COMPLIANCE REVIEW: This Data Security document details KnockMedic\'s technical architecture. It must be audited by cybersecurity compliance officers and certified information security auditors before public launch.',
  sections: [
    {
      id: 'regulatory-basis',
      title: '1. Regulatory Basis & Security Principles',
      content:
        'KnockMedic is an Indian health-technology platform engineered to comply primarily with India\'s Digital Personal Data Protection (DPDP) Act 2023, the proposed Digital Information Security in Healthcare Act (DISHA), and Information Technology (Reasonable Security Practices) Rules 2011.\n\nWhile KnockMedic operates in India and is governed by Indian statutory authorities, our technical security controls adopt global HIPAA-equivalent safeguards (Health Insurance Portability and Accountability Act standards) as a benchmark for end-to-end clinical data protection. KnockMedic does not claim formal US HIPAA certification, but enforces HIPAA-level encryption, access controls, and audit trails across all microservices.',
    },
    {
      id: 'data-encryption',
      title: '2. End-to-End Data Encryption',
      content:
        'All patient identifiers, electronic health records, diagnostic lab reports, and video streams undergo rigorous cryptographic protection:\n\n• Encryption in Transit: All client-to-server and API communications are encrypted using Transport Layer Security (TLS 1.3 / HTTPS) with RSA-4096 / ECC bit keys. Unencrypted HTTP traffic is automatically rejected.\n• Encryption at Rest: Patient profiles, prescription databases, and report media stored in MongoDB and object storage are encrypted at rest using industry-standard AES-256 (Advanced Encryption Standard).\n• Video Session Security: Teleconsultation video calls utilize WebRTC protocols secured via DTLS (Datagram Transport Layer Security) and SRTP (Secure Real-time Transport Protocol). Video calls are ephemeral and are not recorded unless explicitly authorized for clinical recordkeeping.',
    },
    {
      id: 'data-residency-sovereignty',
      title: '3. Data Residency & Sovereign Indian Hosting',
      content:
        'In strict compliance with Indian data sovereignty principles under the DPDP Act 2023:\n\n• 100% of KnockMedic primary databases, backup vaults, and application servers are hosted inside Tier-4 data centers located physically within the Republic of India (Mumbai and Hyderabad regions).\n• Patient Electronic Health Records (EHR) never cross international borders or reside on unvetted foreign servers.',
    },
    {
      id: 'access-control-rbac',
      title: '4. Access Controls & Zero-Trust Architecture',
      content:
        'KnockMedic enforces a strict Zero-Trust Architecture across engineering, operations, and clinical workflows:\n\n• Role-Based Access Control (RBAC): Platform administrative staff cannot view raw medical notes or prescriptions. Access is granted strictly on a need-to-know basis for customer support troubleshooting.\n• Doctor-Patient Session Scoping: Treating medical practitioners gain temporary, session-bound access to a patient\'s medical profile during an active booking. Access automatically expires after consultation completion.\n• Multi-Factor Authentication (MFA): All administrative, doctor portal, and staff access points mandate hardware-backed or TOTP Multi-Factor Authentication.',
    },
    {
      id: 'audit-logging',
      title: '5. Immutable Audit Logging & Monitoring',
      content:
        'Every interaction with a patient\'s health record generates an immutable audit log capturing:\n\n• User / Doctor ID and IP Address\n• Timestamp and exact action (View, Upload, Download, Edit)\n• System component accessed\n\nAudit logs are monitored 24/7 by automated Security Information and Event Management (SIEM) systems to detect unauthorized access patterns or anomaly attempts.',
    },
    {
      id: 'incident-response',
      title: '6. Incident Response & CERT-In Breach Notification',
      content:
        'KnockMedic maintains a dedicated Security Incident Response Team (SIRT). In the event of a suspected or confirmed security incident involving health data:\n\n• Immediate Containment: Affected microservices are isolated within 15 minutes of anomaly detection.\n• Statutory Notification: In accordance with Indian Cybersecurity (CERT-In) guidelines, mandatory notifications are submitted to the Indian Computer Emergency Response Team within 6 hours of incident confirmation.\n• User Advisory: Impacted data principals (users) will be notified without undue delay, along with remediation recommendations, as mandated by the DPDP Act 2023.',
    },
    {
      id: 'reporting-security-concerns',
      title: '7. Vulnerability Disclosure & Contact',
      content:
        'We welcome security researchers and users to responsibly report potential vulnerabilities or data privacy concerns:\n\nSecurity Team: security@knockmedic.com\nPrivacy Office: privacy@knockmedic.com\nResponse Time: Initial acknowledgment within 24 hours.\nPGP Key Fingerprint: Available upon request for encrypted vulnerability reports.',
    },
  ],
};
