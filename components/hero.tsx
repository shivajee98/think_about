"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Award, BookOpen } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* 🔥 Beta Notice */}
          <div
            className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } bg-blue-50 border border-blue-200 text-blue-900 rounded-2xl px-6 py-4 text-left shadow-md`}
          >
            <p className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
              👋 Hey Explorer!
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-snug">
              You’ve caught us in our <span className="font-bold text-blue-800">Beta phase</span>.<br />
              We’re testing, tweaking, and tuning things up.<br />
              <span className="italic">See something odd or brilliant? Let us know.</span><br />
              <span className="text-blue-900 font-medium">You’re part of the journey now.</span>
            </p>
          </div>

          {/* Main Hero Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight tracking-tight">
              Think About
              <span className="block text-4xl md:text-6xl text-slate-600 font-semibold mt-2">Your Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your career with our comprehensive courses in communication, interview preparation, and
              professional development. Join thousands of successful professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => scrollToSection("courses")}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 flex items-center gap-2 bg-transparent"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {[
              { icon: Users, number: "200+", label: "Students Trained" },
              { icon: Award, number: "95%", label: "Success Rate" },
              { icon: BookOpen, number: "10+", label: "Expert Instructors" },
              { icon: Users, number: "24/7", label: "Support Available" },
            ].map(({ icon: Icon, number, label }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{number}</div>
                <div className="text-slate-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
