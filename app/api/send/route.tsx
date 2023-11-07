import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Template Market <onboarding@resend.dev>',
      to: ['jotredev@gmail.com'],
      subject: 'Confirma tu correo',
      react: EmailTemplate({ firstName: 'Jorge Trejo' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
