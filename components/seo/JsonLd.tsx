import React from 'react';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://knockmedic.in/#organization',
    name: 'KnockMedic',
    legalName: 'KnockMedic Health Technologies Pvt Ltd',
    url: 'https://knockmedic.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://knockmedic.in/images/logo.png',
      caption: 'KnockMedic Official Logo',
    },
    description:
      'KnockMedic is India\'s leading consumer healthcare ecosystem connecting patients with verified doctors, 24/7 emergency ambulance dispatch, home lab diagnostics, and AI symptom triage.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Indiranagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560038',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-800-555-0199',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '108',
        contactType: 'emergency',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
    sameAs: [
      'https://twitter.com/knockmedic',
      'https://facebook.com/knockmedic.in',
      'https://instagram.com/knockmedic.india',
      'https://linkedin.com/company/knockmedic',
    ],
  };

  const medicalOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://knockmedic.in/#medical-organization',
    name: 'KnockMedic Healthcare Network',
    url: 'https://knockmedic.in',
    logo: 'https://knockmedic.in/images/logo.png',
    image: 'https://knockmedic.in/images/logo.png',
    description:
      'Connecting patients across India with 15,000+ NMC verified doctors, 24/7 ambulance emergency SOS, doorstep NABL lab sample collection, and hospital finders.',
    telephone: '+91-800-555-0199',
    priceRange: '₹300 - ₹2000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'PAN India',
    },
    geo: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '20.5937',
        longitude: '78.9629',
      },
      geoRadius: '2000000',
    },
    areaServed: [
      'Mumbai',
      'New Delhi',
      'Bengaluru',
      'Hyderabad',
      'Chennai',
      'Pune',
      'Kolkata',
      'Ahmedabad',
      'Jaipur',
      'Lucknow',
    ],
    medicalSpecialty: [
      'GeneralPractice',
      'Cardiovascular',
      'Pediatric',
      'Dermatology',
      'Neurology',
      'Emergency',
      'Gynecology',
      'Orthopedic',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '52480',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Online Doctor Appointment Booking',
        description: 'Instant HD video consultation and clinic visit scheduling with NMC verified doctors.',
      },
      {
        '@type': 'EmergencyService',
        name: '24/7 Ambulance SOS Dispatch',
        description: 'Instant emergency dispatch of ICU and BLS ambulances with real-time GPS tracking under 10 mins ETA.',
      },
      {
        '@type': 'DiagnosticProcedure',
        name: 'Home Lab Test Sample Collection',
        description: 'Doorstep blood and pathology sample collection by certified phlebotomists with NABL reports.',
      },
      {
        '@type': 'MedicalTest',
        name: 'AI Health Triage & Symptom Checker',
        description: '60-second multilingual clinically validated symptom assessment.',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://knockmedic.in/#website',
    url: 'https://knockmedic.in',
    name: 'KnockMedic',
    alternateName: ['Knock Medic', 'KnockMedic India'],
    description:
      'Doctors, Hospitals, Lab Tests & Ambulance Booking Online in India',
    publisher: {
      '@id': 'https://knockmedic.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://knockmedic.in/doctors?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://knockmedic.in/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book a doctor appointment online on KnockMedic (doctor appointment kaise kare)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To book a doctor appointment online on KnockMedic, enter your city or required specialty (e.g. Cardiologist, General Physician, Pediatrician) in the search bar, pick your preferred doctor based on verified NMC credentials and patient ratings, choose a slot for HD video consult or clinic visit, and complete secure payment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly does the 24/7 Ambulance SOS arrive in emergency situations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KnockMedic\'s 24/7 emergency ambulance dispatch connects directly with satellite GPS tracking and national emergency networks (108) to deliver an average ETA under 10 minutes for ICU and BLS ambulances across major Indian cities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get lab tests collected at home (ghar pe lab test)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! KnockMedic provides doorstep lab test sample collection. Certified phlebotomists collect blood/pathology samples from your home, and NABL-accredited digital smart reports are delivered to your phone in 6 to 12 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all doctors on KnockMedic NMC/MCI registered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every doctor listed on KnockMedic undergoes strict credential verification against National Medical Commission (NMC) and State Medical Council registries before being enabled for consultations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI Symptom Triage work for instant health guidance (turant doctor consultation)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KnockMedic\'s AI Symptom Triage asks clinically validated questions in Hindi or English about your symptoms. Within 60 seconds, it advises whether self-care, online doctor consultation, or urgent emergency SOS dispatch is recommended.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
