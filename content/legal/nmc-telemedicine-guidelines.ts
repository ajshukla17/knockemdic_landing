import { LegalDocument } from './types';

export const nmcTelemedicineGuidelinesContent: LegalDocument = {
  slug: 'nmc-telemedicine-guidelines',
  title: 'NMC & Telemedicine Practice Guidelines',
  subtitle: 'How KnockMedic ensures compliance with India\'s National Medical Commission regulations for teleconsultations.',
  lastUpdated: 'August 1, 2026',
  metaDescription:
    'KnockMedic NMC Telemedicine Compliance - Learn how our platform enforces doctor registration verification, prescription restriction lists, patient consent, and statutory recordkeeping in India.',
  draftNotice:
    'DRAFT FOR COMPLIANCE REVIEW: This document outlines KnockMedic\'s operational adherence to the NMC Telemedicine Practice Guidelines (2020/2023). It must be reviewed by healthcare compliance officers and legal experts in Indian medical regulatory law before public deployment.',
  sections: [
    {
      id: 'regulatory-framework',
      title: '1. Regulatory Framework & Scope',
      content:
        'Teleconsultations conducted through the KnockMedic platform strictly adhere to the Telemedicine Practice Guidelines issued under the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002 and updated by the National Medical Commission (NMC).\n\nThese guidelines establish ethical and operational standards for Registered Medical Practitioners (RMPs) conducting video, audio, or text-based consultations across India.',
    },
    {
      id: 'doctor-verification',
      title: '2. RMP Identity & Registration Verification',
      content:
        'Before any medical practitioner is permitted to offer consultations on KnockMedic, our credentialing team verifies:\n\n• NMC / State Medical Council Registration Number against official statutory databases.\n• Primary Medical Degree (MBBS) and Post-Graduate Specialization Certificates (MD/MS/DM/MCh).\n• Identity Verification via Aadhaar-based e-KYC and professional indemnity insurance coverage.\n\nEvery doctor profile on KnockMedic prominently displays their official registration number, granting authority to practice telemedicine under Indian law.',
    },
    {
      id: 'patient-consent',
      title: '3. Mandatory Patient Consent',
      content:
        'Patient consent is mandatory before starting any teleconsultation on KnockMedic:\n\n• Implied Consent: Consent is implied when the patient initiates a consultation request.\n• Explicit Consent: Before starting a video call, users receive a clear prompt confirming their agreement to consult via video. If a consultation is initiated by a caregiver on behalf of a patient, explicit relationship details must be provided.\n• Right to Opt Out: Patients retain the right to terminate a teleconsultation at any moment and request an in-person clinic referral.',
    },
    {
      id: 'prescribing-limitations',
      title: '4. Prescription Drug Classification & Restrictions',
      content:
        'KnockMedic enforces automated system safeguards aligned with NMC drug classification guidelines:\n\n• List O (Over-The-Counter): Safe medications such as paracetamol, ORS, cough lozenges, and vitamins may be prescribed freely.\n• List A (First Consult / Video): Medications for common ailments (e.g. hypertension, diabetes refills, antibiotics) prescribed during first video consults or follow-ups.\n• List B (Follow-up Consults): Maintenance medications prescribed during ongoing follow-up consultations within 6 months.\n• PROHIBITED (Schedule X & Narcotics): Restricted drugs listed under Schedule X of Drugs and Cosmetics Rules, 1945, and psychotropic/narcotic substances under the NDPS Act are STRICTLY PROHIBITED from being prescribed via teleconsultation. The platform automatically blocks RMPs from issuing prescriptions for restricted substances.',
    },
    {
      id: 'clinical-triage',
      title: '5. Duty of Care & In-Person Referral Triage',
      content:
        'Under NMC rules, an RMP bears the same professional responsibility during a teleconsultation as in an in-person clinic:\n\n• If an RMP determines that physical examination is necessary (e.g. abdominal palpation, emergency trauma), they are obligated to advise an immediate in-person clinic or hospital visit.\n• KnockMedic provides an instant "Refer to In-Person Clinic / SOS Ambulance" button within the doctor console to transition emergency patients without delay.',
    },
    {
      id: 'record-keeping',
      title: '6. Statutory Consultation Record-Keeping',
      content:
        'In compliance with NMC guidelines, KnockMedic securely archives consultation metadata, video call logs, e-prescriptions, and uploaded patient diagnostic reports for a minimum of 3 years.\n\nPrescriptions generated on KnockMedic include the RMP\'s full name, registration number, digital signature, patient details, clear dosage instructions, and date timestamp.\n\nTo read more about our encryption and data archiving security, visit our Data Security page at /hipaa-disha-data-security.',
    },
    {
      id: 'doctor-responsibilities',
      title: '7. Doctor-Side Compliance Obligations',
      content:
        'RMPs utilizing the KnockMedic platform covenant to:\n\n• Maintain patient confidentiality in accordance with medical ethics.\n• Display their NMC registration number on all digital prescriptions generated.\n• Refrain from delegating consultations to unregistered assistants or junior staff.\n• Adhere strictly to the professional fee structure declared on the platform.',
    },
  ],
};
