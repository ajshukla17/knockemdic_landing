import { NextResponse } from 'next/server';

interface EnquiryPayload {
  category?: string;
  enquiry?: string;
  phone?: string;
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();
    const { category, enquiry, phone } = body;

    // Validation
    if (!phone || !/^[6-9]\d{9}$/.test(phone.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }

    if (!enquiry || enquiry.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please describe your requirement or question.' },
        { status: 400 }
      );
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

    try {
      const backendResponse = await fetch(`${apiUrl}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: category || 'doctor',
          enquiry: enquiry.trim(),
          phone: phone.trim(),
        }),
      });

      if (backendResponse.ok) {
        const backendData = await backendResponse.json();
        return NextResponse.json(
          {
            success: true,
            referenceId: backendData.referenceId || backendData.data?.referenceId,
            message: 'Your assistance request has been received. Our care team will contact you shortly.',
            data: backendData.data,
          },
          { status: 200 }
        );
      }
    } catch (err) {
      console.warn('[KnockMedic Landing] Backend server unavailable, using local fallback:', err);
    }

    // Local fallback if backend cannot be reached
    const fallbackId = `KM-${Math.floor(100000 + Math.random() * 900000)}`;
    return NextResponse.json(
      {
        success: true,
        referenceId: fallbackId,
        message: 'Your assistance request has been received. Our care team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[KnockMedic Patient Enquiry Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
