"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Target, Award, BookOpen, ArrowRight } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Personalized Learning",
      description: "Customized learning paths tailored to your career goals and skill level"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Industry Recognition",
      description: "Certificates and skills recognized by top companies and organizations"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Curriculum",
      description: "Complete courses covering all aspects of professional development"
    }
  ]

  const achievements = [
    "200+ successful career transformations",
    "95% job placement rate within 6 months",
    "50+ industry partnerships",
    "24/7 student support and mentorship"
  ]

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              WHO WE ARE
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Transforming Careers Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500">Excellence</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              We're dedicated to bridging the gap between academic learning and industry requirements with comprehensive professional development programs designed for the modern world.
            </p>

            <div className="space-y-4 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="bg-slate-900 hover:bg-blue-900 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg shadow-slate-900/20 hover:shadow-blue-900/30 transition-all duration-300 group hover:-translate-y-1">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 relative ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative z-10 group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply group-hover:bg-blue-200 transition-colors duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply group-hover:bg-indigo-200 transition-colors duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-slate-100">
                <Image
                    src="/course/about.png"
                    alt="About Think About"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Stat Card with Glassmorphism */}
              <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 z-20 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[220px] animate-bounce-gentle hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-100/50">
                    <Award className="w-7 h-7 text-yellow-600" />
                  </div>
                  <span className="text-3xl font-bold text-slate-900">10+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-tight">Years of educational excellence & innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-28">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Think About?</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide comprehensive support and resources to ensure your success in every step of your career journey, backed by industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
