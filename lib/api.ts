import { Doctor, DoctorsApiResponse } from './types';

const FALLBACK_PHOTO = '/images/doctor-placeholder.png';

const FALLBACK_DOCTORS: Doctor[] = [
  {
    _id: 'doc-1',
    name: 'Dr. Ananya Sharma',
    specialization: 'Cardiologist',
    qualifications: ['MBBS', 'MD (Cardiology)', 'FACC'],
    experience: 14,
    languages: ['English', 'Hindi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Apollo Heart Institute',
    clinicAddress: { city: 'Mumbai' },
    fees: { clinic: 800, video: 500 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.9,
    totalReviews: 312,
    isOnline: true,
  },
  {
    _id: 'doc-2',
    name: 'Dr. Rajesh Verma',
    specialization: 'General Physician',
    qualifications: ['MBBS', 'MD (Internal Medicine)'],
    experience: 18,
    languages: ['English', 'Hindi', 'Punjabi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Max Healthcare Clinic',
    clinicAddress: { city: 'New Delhi' },
    fees: { clinic: 600, video: 400 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.8,
    totalReviews: 428,
    isOnline: true,
  },
  {
    _id: 'doc-3',
    name: 'Dr. Priya Patel',
    specialization: 'Pediatrician',
    qualifications: ['MBBS', 'DCH', 'MD (Pediatrics)'],
    experience: 11,
    languages: ['English', 'Hindi', 'Gujarati'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Little Smiles Children Clinic',
    clinicAddress: { city: 'Bengaluru' },
    fees: { clinic: 700, video: 450 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.95,
    totalReviews: 284,
    isOnline: false,
  },
  {
    _id: 'doc-4',
    name: 'Dr. Vikramaditya Rao',
    specialization: 'Neurologist',
    qualifications: ['MBBS', 'DM (Neurology)'],
    experience: 16,
    languages: ['English', 'Telugu', 'Hindi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Brain & Spine Care Centre',
    clinicAddress: { city: 'Hyderabad' },
    fees: { clinic: 1000, video: 700 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.9,
    totalReviews: 195,
    isOnline: true,
  },
  {
    _id: 'doc-5',
    name: 'Dr. Sunita Deshmukh',
    specialization: 'Dermatologist',
    qualifications: ['MBBS', 'MD (Dermatology)'],
    experience: 10,
    languages: ['English', 'Hindi', 'Marathi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'GlowSkin Clinic',
    clinicAddress: { city: 'Pune' },
    fees: { clinic: 750, video: 500 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.85,
    totalReviews: 340,
    isOnline: true,
  },
  {
    _id: 'doc-6',
    name: 'Dr. Arvind Kumar',
    specialization: 'Orthopedic',
    qualifications: ['MBBS', 'MS (Orthopedics)'],
    experience: 15,
    languages: ['English', 'Hindi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Bone & Joint Speciality Hospital',
    clinicAddress: { city: 'Chennai' },
    fees: { clinic: 900, video: 600 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.88,
    totalReviews: 210,
    isOnline: false,
  },
  {
    _id: 'doc-7',
    name: 'Dr. Meera Reddy',
    specialization: 'Gynecologist',
    qualifications: ['MBBS', 'MS (OBG)', 'FICOG'],
    experience: 13,
    languages: ['English', 'Hindi', 'Kannada'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Motherhood Healthcare',
    clinicAddress: { city: 'Bengaluru' },
    fees: { clinic: 800, video: 550 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.92,
    totalReviews: 360,
    isOnline: true,
  },
  {
    _id: 'doc-8',
    name: 'Dr. Rohan Gupta',
    specialization: 'ENT Specialist',
    qualifications: ['MBBS', 'MS (ENT)'],
    experience: 9,
    languages: ['English', 'Hindi'],
    profilePhoto: FALLBACK_PHOTO,
    clinicName: 'Metro ENT Clinic',
    clinicAddress: { city: 'Kolkata' },
    fees: { clinic: 650, video: 400 },
    consultationModes: { clinic: true, video: true },
    averageRating: 4.79,
    totalReviews: 180,
    isOnline: true,
  },
];

export async function fetchDoctors(limit = 8, specialization?: string): Promise<Doctor[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ;

  try {
    const queryParams = new URLSearchParams();
    queryParams.append('limit', limit.toString());
    queryParams.append('sort', 'rating');
    if (specialization && specialization !== 'All') {
      queryParams.append('specialization', specialization);
    }

    // Call the unauthenticated public endpoint
    const url = `${baseUrl}/doctors/public?${queryParams.toString()}`;

    const res = await fetch(url, {
      next: { revalidate: 300 }, // ISR 5 min cache
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 401 Unauthorized should NEVER be masked by fallback mock data
    if (res.status === 401) {
      console.error('[KnockMedic API Error] Received 401 Unauthorized from public doctors endpoint!');
      throw new Error(`Public doctors endpoint authentication error (${res.status})`);
    }

    if (!res.ok) {
      console.warn(`[KnockMedic API Warning] Public API returned ${res.status}. Falling back to default roster.`);
      return filterDoctors(FALLBACK_DOCTORS, specialization, limit);
    }

    const data: DoctorsApiResponse = await res.json();
    if (data && data.data && Array.isArray(data.data.doctors) && data.data.doctors.length > 0) {
      return data.data.doctors.map(normalizeDoctor);
    }

    // If database returned 0 doctors, use fallback
    return filterDoctors(FALLBACK_DOCTORS, specialization, limit);
  } catch (error) {
    if (error instanceof Error && error.message.includes('401')) {
      throw error;
    }
    console.warn('[KnockMedic API] Express backend unreachable or server error. Rendering fallback doctor roster.', error);
    return filterDoctors(FALLBACK_DOCTORS, specialization, limit);
  }
}

function normalizeDoctor(doc: any): Doctor {
  // Normalize qualifications (strings vs objects)
  let normalizedQuals: string[] = ['MBBS'];
  if (Array.isArray(doc.qualifications) && doc.qualifications.length > 0) {
    normalizedQuals = doc.qualifications
      .map((q: any) => {
        if (typeof q === 'string') return q;
        if (q && typeof q === 'object' && q.degree) return q.degree;
        return null;
      })
      .filter(Boolean) as string[];
  }

  return {
    _id: doc._id || doc.id || Math.random().toString(),
    name: doc.name || 'Verified Doctor',
    specialization: doc.specialization || 'General Physician',
    qualifications: normalizedQuals.length > 0 ? normalizedQuals : ['MBBS'],
    experience: doc.experience ?? 5,
    languages: doc.languages || ['English', 'Hindi'],
    profilePhoto: doc.profilePhoto || FALLBACK_PHOTO,
    about: doc.about || '',
    clinicName: doc.clinicName || 'KnockMedic Network Hospital',
    clinicAddress: {
      city: doc.clinicAddress?.city || 'India',
      address: doc.clinicAddress?.line1 || '',
    },
    fees: {
      clinic: doc.fees?.clinic || 500,
      video: doc.fees?.video || 400,
    },
    consultationModes: {
      clinic: doc.consultationModes?.clinic ?? true,
      video: doc.consultationModes?.video ?? true,
    },
    averageRating: doc.averageRating != null ? Number(doc.averageRating) : 4.8,
    totalReviews: doc.totalReviews != null ? Number(doc.totalReviews) : 120,
    totalAppointments: doc.totalAppointments != null ? Number(doc.totalAppointments) : 500,
    isOnline: Boolean(doc.isOnline),
    acceptingAppointments: doc.acceptingAppointments ?? true,
  };
}

function filterDoctors(doctors: Doctor[], specialization?: string, limit = 8): Doctor[] {
  let list = doctors;
  if (specialization && specialization !== 'All') {
    list = doctors.filter(
      (d) => d.specialization.toLowerCase() === specialization.toLowerCase()
    );
  }
  return list.slice(0, limit);
}
