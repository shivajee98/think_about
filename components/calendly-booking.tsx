"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Video, Users } from "lucide-react"

export default function CalendlyBooking() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("calendly-booking")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="calendly-booking" className="relative py-24 px-4 overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-50/80 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide">
            Book a Meeting
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
              Let's Talk About Your Future
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized consultation to discuss your learning goals and get expert guidance on your career
            path.
          </p>
        </div>

        {/* Features */}
        <div
          className={`mb-16 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              icon: Calendar,
              title: "Easy Scheduling",
              desc: "Pick a time that works best for your schedule",
              delay: "0",
            },
            {
              icon: Video,
              title: "Video Consultation",
              desc: "Face-to-face meeting via Google Meet or Zoom",
              delay: "100",
            },
            {
              icon: Users,
              title: "Expert Guidance",
              desc: "Get advice from industry professionals",
              delay: "200",
            },
            {
              icon: Clock,
              title: "30 Min Session",
              desc: "Focused discussion tailored to your needs",
              delay: "300",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-900">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendly Embed */}
        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative frame elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur opacity-30"></div>

          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
             {/* Window controls decoration */}
             <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-6 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                <div className="ml-4 text-xs font-medium text-slate-400 flex items-center">
                  <span className="w-2 h-2 mr-2 bg-slate-300 rounded-full"></span>
                  Calendly Booking System
                </div>
             </div>

            <div className="relative">
              <iframe
                src="https://calendly.com/pratyanshudevang/30min"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                className="min-h-[700px] bg-white"
                title="Schedule a meeting with Think About"
              />

              {/* Loading overlay */}
              <div
                className="absolute inset-0 bg-white flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
                id="calendly-loading"
              >
                <div className="text-center">
                  <div className="inline-flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <p className="text-slate-500 font-medium">Loading calendar...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">What to Expect</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="relative pl-4 border-l-2 border-blue-200">
                <strong className="block text-blue-900 text-sm uppercase tracking-wider mb-1">Before</strong>
                <p className="text-slate-600 text-sm">You'll receive a confirmation email with the video call link and agenda</p>
              </div>
              <div className="relative pl-4 border-l-2 border-blue-200">
                <strong className="block text-blue-900 text-sm uppercase tracking-wider mb-1">During</strong>
                <p className="text-slate-600 text-sm">We'll discuss your goals, answer questions, and provide personalized recommendations</p>
              </div>
              <div className="relative pl-4 border-l-2 border-blue-200">
                <strong className="block text-blue-900 text-sm uppercase tracking-wider mb-1">After</strong>
                <p className="text-slate-600 text-sm">You'll get a follow-up email with resources and actionable next steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
