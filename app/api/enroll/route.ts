// app/api/enroll/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, college, courseTitle } = body

        const messageHTML = `
      <h2>📩 New Enrollment Request</h2>
      <p><strong>Course:</strong> ${courseTitle}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>College:</strong> ${college}</p>
    `

        const data = await resend.emails.send({
            from: 'Enrollment Bot <onboarding@resend.dev>',
            to: 'care@thinkabout.in',
            subject: `New Enrollment: ${courseTitle}`,
            html: messageHTML,
        })

        return NextResponse.json({ status: 'ok', data })
    } catch (error) {
        console.error('[ENROLL-EMAIL-ERROR]', error)
        return NextResponse.json({ status: 'error', error }, { status: 500 })
    }
}
