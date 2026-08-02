import { LegalDocument } from './types';

export const termsOfServiceContent: LegalDocument = {
  slug: 'terms-of-service',
  title: 'Terms of Service',
  subtitle: 'Terms and conditions governing the use of the KnockMedic platform, booking services, and emergency features.',
  lastUpdated: 'August 1, 2026',
  metaDescription:
    'KnockMedic Terms of Service - Read our platform terms, doctor appointment booking policies, emergency ambulance SOS disclaimers, and user obligations in India.',
  draftNotice:
    'DRAFT FOR LEGAL REVIEW: These Terms of Service have been drafted for KnockMedic operating in India. They must be reviewed by legal counsel specializing in technology and healthcare law prior to binding deployment.',
  sections: [
    {
      id: 'acceptance-eligibility',
      title: '1. Acceptance & Account Eligibility',
      content:
        'By creating an account or accessing the KnockMedic website and mobile app, you agree to be bound by these Terms of Service and our Privacy Policy (/privacy-policy).\n\nTo register an account, you must be at least 18 years of age and capable of entering into legally binding contracts under the Indian Contract Act, 1872. Accounts registered on behalf of minors must be managed by a parent or legal guardian.',
    },
    {
      id: 'platform-disclaimer',
      title: '2. Technology Platform Disclaimer (Not a Medical Provider)',
      content:
        'IMPORTANT: KnockMedic is a digital technology platform and aggregator. KnockMedic is NOT a hospital, medical clinic, or licensed healthcare provider. We do not practice medicine or employ doctors directly.\n\nAll consultations, clinical advice, diagnostic interpretations, and prescriptions are provided independently by registered medical practitioners (RMPs) licensed by the National Medical Commission (NMC) or respective State Medical Councils.\n\nFor details on doctor registration standards and teleconsultation compliance, view our NMC Telemedicine Guidelines at /nmc-telemedicine-guidelines.',
    },
    {
      id: 'description-of-services',
      title: '3. Description of Services',
      content:
        'KnockMedic provides users with access to four primary healthcare modules:\n\n• Doctor Consultations: Search, schedule, and join encrypted video consultations or book in-clinic appointments with verified independent specialists.\n• Ambulance SOS Dispatch: Emergency feature that locates and dispatches nearby 108 or partner ICU/BLS ambulance units based on GPS coordinates transmitted by the user.\n• Lab Tests & Diagnostics: Scheduling doorstep sample collection conducted by partner NABL-accredited diagnostic laboratories.\n• AI Symptom Triage: Automated health check assistant providing preliminary informational guidance based on user-entered symptoms.',
    },
    {
      id: 'emergency-sos-terms',
      title: '4. Emergency Ambulance SOS Terms',
      content:
        'The Ambulance SOS feature is designed for emergency dispatch assistance. KnockMedic routes SOS requests to available 108 network units and private paramedic partners.\n\nWhile KnockMedic employs real-time GPS tracking to minimize response times, actual arrival times depend on local traffic conditions, weather, and paramedic availability. In life-threatening cardiac, stroke, or severe trauma cases, users are urged to simultaneously call 108 directly from a cellular phone.',
    },
    {
      id: 'user-responsibilities',
      title: '5. User Responsibilities & Conduct',
      content:
        'As a KnockMedic user, you agree to:\n\n• Provide accurate personal, contact, and medical history details.\n• Refrain from misusing the Ambulance SOS button for non-emergencies or false alarms.\n• Follow doctor instructions regarding in-person evaluations when teleconsultation is deemed insufficient by the treating physician.\n• Not record, record, or distribute video consultation sessions without explicit written consent from the treating doctor.',
    },
    {
      id: 'payments-cancellations-refunds',
      title: '6. Payments, Cancellations & Refunds',
      content:
        '• Consultation Fees: Set by independent doctors or partner clinics and displayed prior to booking. Full payment is required at the time of reservation via credit/debit card, net banking, or UPI.\n• Cancellation Policy: Appointments cancelled up to 2 hours prior to the scheduled slot receive a 100% refund. Cancellations made within 2 hours may incur a 20% cancellation fee.\n• Doctor No-Show: If a doctor fails to attend a confirmed consultation within 15 minutes of the scheduled time, the user is entitled to a 100% full refund or a free instant reschedule.\n• Refunds Processing: Approved refunds are credited back to the original payment source within 5-7 business days.',
    },
    {
      id: 'limitation-of-liability',
      title: '7. Limitation of Liability',
      content:
        'To the maximum extent permitted by Indian law, KnockMedic and its officers shall not be liable for indirect, incidental, or consequential damages arising from:\n\n• Medical diagnosis or treatment provided by independent RMPs.\n• Ambulance transit delays caused by traffic congestion, weather events, or road blockages.\n• Inaccurate AI Symptom Triage results caused by incomplete or incorrect user inputs.\n• Server outages or internet connectivity failures during video calls.',
    },
    {
      id: 'dispute-governing-law',
      title: '8. Governing Law & Jurisdiction',
      content:
        'These Terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes or claims arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.',
    },
    {
      id: 'account-termination',
      title: '9. Account Termination',
      content:
        'KnockMedic reserves the right to suspend or terminate user accounts that engage in fraudulent bookings, abusive behavior toward medical staff, false emergency triggers, or violations of these Terms.',
    },
  ],
};
