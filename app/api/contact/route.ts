// /app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()
    const { name, email, subject, message } = body

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // your verified sender
            to: ['care@thinkabout.in'], // your real email
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Email send error:', error)
        return NextResponse.json({ success: false, error })
    }
}
