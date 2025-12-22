"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Star, CheckCircle2, ArrowRight } from "lucide-react"
import EnrollForm from "@/components/EnrollForm"

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("courses")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const offlineCourses = [
    {
      title: "Beginner's Pathway",
      subtitle: "LaunchPad: Interview & Communication Skills",
      description:
        "A comprehensive course for freshers focusing on Interview Preparation, Personality Development, and Communication Skills.",
      image: "/course/beginner_pathway.png",
      duration: "12 weeks",
      students: 50,
      rating: 4.9,
      price: "₹4,999",
      features: ["Mock Interviews", "Personality Development", "Communication Training", "Resume Building"],
      color: "blue"
    },
    {
      title: "Mid-Career Growth",
      subtitle: "Pathfinder: Career Growth & Networking",
      description:
        "Aimed at professionals with some experience, covering Career Guidance, Advanced Communication, and Professional Networking strategies.",
      image: "/course/mid_career_growth.png",
      duration: "16 weeks",
      students: 65,
      rating: 4.8,
      price: "₹4,999",
      features: ["Leadership Skills", "Advanced Communication", "Networking", "Career Strategy"],
      color: "indigo"
    },
    {
      title: "Executive Edge",
      subtitle: "Leadership Summit: Executive Interview & Impact",
      description:
        "For senior professionals, focusing on Executive Interview Preparation, Leadership Development, and High-Level Communication skills.",
      image: "/course/executive_edge.png",
      duration: "8 weeks",
      students: 80,
      rating: 4.7,
      price: "₹4,999",
      features: ["Executive Presence", "Strategic Thinking", "Team Leadership", "Public Speaking"],
      color: "purple"
    },
    {
      title: "USP (Unified Course Offering)",
      subtitle: "Career Acceleration Blueprint",
      description:
        "The all-in-one, structured learning journey for individuals at any stage of their career, designed to accelerate growth and success.",
      image: "/course/usp.png",
      duration: "20 weeks",
      students: 90,
      rating: 4.9,
      price: "₹11,999",
      features: ["Complete Career Package", "All Skill Levels", "Mentorship", "Job Placement Support"],
      color: "emerald"
    },
  ]

  const onlineCourses = [
    {
      title: "Digital Communication",
      subtitle: "Master Online Communication & Virtual Presence",
      description:
        "Learn to communicate effectively in digital environments, master video calls, online presentations, and virtual team collaboration.",
      image: "/course/digital_communication_mastery.png",
      duration: "Self-paced",
      rating: 4.9,
      price: "₹2,999",
      level: "All Levels",
      features: ["Video Call Etiquette", "Online Presentations", "Digital Body Language", "Virtual Team Management"],
      color: "sky"
    },
    {
      title: "Professional Writing",
      subtitle: "Master Business Writing & Technical Documentation",
      description:
        "Develop professional writing skills for emails, reports, proposals, and technical documentation that gets results.",
      image: "/course/professional_writing.png",
      duration: "8 weeks",
      rating: 4.8,
      price: "₹3,999",
      level: "Intermediate",
      features: ["Business Writing", "Email Etiquette", "Report Writing", "Technical Documentation"],
      color: "teal"
    },
    {
      title: "Interview Bootcamp",
      subtitle: "Comprehensive Interview Success Program",
      description:
        "Complete interview preparation covering technical interviews, behavioral questions, salary negotiation, and follow-up strategies.",
      image: "/course/interview_preparation.png",
      duration: "6 weeks",
      rating: 4.9,
      price: "₹4,999",
      level: "All Levels",
      features: ["Mock Interviews", "Technical Prep", "Behavioral Questions", "Salary Negotiation"],
      color: "orange"
    },
    {
      title: "Personal Branding",
      subtitle: "Build Your Professional Brand Online",
      description:
        "Create a powerful personal brand, optimize your LinkedIn profile, and learn networking strategies that open doors to opportunities.",
      image: "/course/personal_branding.png",
      duration: "4 weeks",
      rating: 4.7,
      price: "₹2,499",
      level: "Beginner",
      features: ["LinkedIn Optimization", "Personal Branding", "Content Strategy", "Professional Networking"],
      color: "pink"
    },
  ]

  const CourseCard = ({ course, index }: { course: any, index: number }) => (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100/80 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 font-medium px-3 py-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </Badge>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-10">
            <Badge variant="outline" className="text-white border-white/30 bg-black/20 backdrop-blur-sm mb-3 text-xs tracking-wider font-semibold uppercase">
                {course.title.split('(')[0]}
            </Badge>
           <h3 className="text-white font-bold text-xl leading-tight text-shadow-sm line-clamp-2 mb-1">{course.subtitle}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
            <Star className="w-4 h-4 fill-current" />
            <span>{course.rating}</span>
            <span className="text-slate-400 font-normal text-xs ml-1">(120+ reviews)</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow border-b border-slate-50 pb-6">
          {course.description}
        </p>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {course.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">Course Fee</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900">{course.price}</span>
              </div>
            </div>
            <Button
              className="bg-slate-900 group-hover:bg-blue-900 text-white rounded-xl px-6 py-5 font-semibold shadow-lg shadow-slate-900/10 group-hover:shadow-blue-900/20 transition-all duration-300 flex items-center gap-2"
              onClick={() => {
                setSelectedCourseTitle(course.title)
                setShowForm(true)
              }}
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="courses" className="relative py-24 px-4 bg-slate-50 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            OUR PROGRAMS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Growth</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our comprehensive range of courses designed to elevate your professional skills and career trajectory.
          </p>
        </div>

        <Tabs defaultValue="offline" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200/60 shadow-sm inline-flex h-auto">
              <TabsTrigger
                value="offline"
                className="rounded-full px-8 py-3 text-base font-medium data-[state=active]:bg-blue-900 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600 hover:text-blue-900 transition-all duration-300"
              >
                Offline Courses
              </TabsTrigger>
              <TabsTrigger
                value="online"
                className="rounded-full px-8 py-3 text-base font-medium data-[state=active]:bg-blue-900 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600 hover:text-blue-900 transition-all duration-300"
              >
                Online Courses
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="offline" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {offlineCourses.map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {onlineCourses.map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <EnrollForm open={showForm} onClose={() => setShowForm(false)} courseTitle={selectedCourseTitle} />
    </section>
  )
}
