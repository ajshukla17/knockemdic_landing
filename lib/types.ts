export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  qualifications?: string[];
  experience: number;
  languages?: string[];
  profilePhoto?: string;
  about?: string;
  clinicName?: string;
  clinicAddress?: {
    city?: string;
    address?: string;
  };
  fees?: {
    clinic?: number;
    video?: number;
  };
  consultationModes?: {
    clinic?: boolean;
    video?: boolean;
  };
  averageRating: number;
  totalReviews: number;
  totalAppointments?: number;
  isOnline?: boolean;
  acceptingAppointments?: boolean;
}

export interface DoctorsApiResponse {
  status: string;
  message?: string;
  data: {
    doctors: Doctor[];
    pagination?: {
      total: number;
      page: number;
      limit: number;
      pages: number;
    };
  };
}
