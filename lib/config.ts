/**
 * Application environment configuration helper
 */

const DEFAULT_DOCTOR_PORTAL_URL = 'https://partners.knockmedic.com';

/**
 * Returns the URL for the Doctor & Lab Partner portal.
 * Handles missing environment variables safely across dev and production.
 */
export function getDoctorPortalUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL;

  if (!envUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[KnockMedic Warning]: NEXT_PUBLIC_DOCTOR_PORTAL_URL is not set. Falling back to default:',
        DEFAULT_DOCTOR_PORTAL_URL
      );
    }
    return DEFAULT_DOCTOR_PORTAL_URL;
  }

  return envUrl;
}
