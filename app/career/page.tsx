"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Users, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorSpotlight from "@/components/cursor-spotlight"
import WhatsAppButton from "@/components/whatsapp-button"

// Lazy loading component for job details
const JobDetails = ({ job }: { job: any }) => {
  return (
    <div className="space-y-8">
      <div className="bg-slate-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-blue-900 mb-6">About the Role</h3>
        <p className="text-slate-700 leading-relaxed mb-6">{job.fullDescription}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Role Details</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span className="text-slate-700">{job.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-900" />
                <span className="text-slate-700">{job.timing}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-900" />
                <span className="text-slate-700">{job.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-900" />
                <span className="text-slate-700">{job.stipend}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Focus Areas</h4>
            <ul className="space-y-2">
              {job.focusAreas.map((area: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-900 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-4">What We Expect</h4>
          <ul className="space-y-2">
            {job.expectations.map((expectation: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 text-sm">{expectation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-4">What You'll Gain</h4>
          <div className="space-y-4">
            {job.benefits.map((benefit: any, index: number) => (
              <div key={index}>
                <h5 className="font-medium text-blue-900 text-sm mb-1">{benefit.title}</h5>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Application Form Component
const ApplicationForm = ({ jobTitle }: { jobTitle: string }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    graduationDate: "",
    skills: "",
    experience: "",
    resume: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200">
      <h3 className="text-2xl font-semibold text-blue-900 mb-6">Apply for {jobTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
            <Input
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
            <Input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Education</label>
            <Select onValueChange={(value) => setFormData({ ...formData, education: value })}>
              <SelectTrigger className="border-slate-300 focus:border-blue-900 focus:ring-blue-900">
                <SelectValue placeholder="Select your education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="graduate">Graduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Graduation Date</label>
            <Input
              type="date"
              value={formData.graduationDate}
              onChange={(e) => setFormData({ ...formData, graduationDate: e.target.value })}
              className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Technical Skills</label>
          <Textarea
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
            placeholder="List your technical skills..."
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Relevant Experience (Optional)</label>
          <Textarea
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
            placeholder="Describe your relevant experience..."
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Upload Resume/CV (PDF only)</label>
          <Input
            type="file"
            accept=".pdf"
            onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
            className="border-slate-300 focus:border-blue-900 focus:ring-blue-900"
          />
        </div>

        <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
          Submit Application
        </Button>
      </form>
    </div>
  )
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [showApplication, setShowApplication] = useState(false)

  const jobOpenings = [
    {
      id: 1,
      title: "Technical Support Intern",
      type: "Internship Opportunity",
      subtitle: "Join Our Tech Team as a Technical Support Intern",
      description: "Gain real-world experience in a dynamic startup environment under Think About Corporation",
      fullDescription:
        "You'll work with our core team to improve frontend performance, write internal docs, test UI components, and assist in backend deployment pipelines. Expect ownership of small-but-critical modules that directly affect user experience and system stability.",
      location: "E-Cell, A Block, MIT Campus",
      timing: "9:20 AM – 4:30 PM with full flexibility during exams, semesters, and seasonal breaks",
      duration: "6 months with PPO opportunities",
      stipend: "Paid role. Stipend kicks in after 2 months. Regular increments based on performance.",
      focusAreas: [
        "Development of Backend API for our project",
        "Frontend performance tuning using Next.js, developing various frontend components and TailwindCSS best practices",
        "Writing and maintaining developer-facing + user-facing documentation (e.g., onboarding guides, component usage, API endpoints)",
        "Manual + automated UI testing (e.g., Playwright, Jest, basic unit testing)",
        "Deploying backend services using Docker on AWS EC2 / ECS (under supervision, but with hands-on responsibility)",
      ],
      expectations: [
        "Consistent communication and async updates (we work semi-remote)",
        "Daily commits and progress logs",
        "You take feedback without ego—your code isn't your baby",
        "You aren't afraid of reading docs or debugging without being spoon-fed",
      ],
      benefits: [
        {
          title: "Ship Like a Startup",
          description:
            "Work on real, high-stakes products — from e-commerce platforms to Zoom-like apps — with zero room for fluff.",
        },
        {
          title: "Stack Mastery in Chaos",
          description: "You won't just 'learn' Next.js or AWS — you'll break, debug, and deploy them under pressure.",
        },
        {
          title: "Real DevOps Practice",
          description: "Contribute to actual CI/CD pipelines, containerized apps, and live deployments.",
        },
        {
          title: "Write Code That Survives",
          description: "Clean, testable, modular — your code must be production-grade.",
        },
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      type: "Full-time Position",
      subtitle: "Senior Full Stack Developer - Remote/Hybrid",
      description: "Build scalable web applications using modern technologies in our growing tech team",
      fullDescription:
        "As a Senior Full Stack Developer, you'll architect and develop complex web applications, mentor junior developers, and contribute to technical decisions that shape our product roadmap.",
      location: "Remote / Bangalore Office",
      timing: "Flexible working hours with core overlap 10 AM - 3 PM IST",
      duration: "Permanent position with growth opportunities",
      stipend: "Competitive salary package with equity options and performance bonuses",
      focusAreas: [
        "Architect and develop scalable web applications using React, Node.js, and TypeScript",
        "Design and implement RESTful APIs and GraphQL endpoints",
        "Optimize application performance and implement caching strategies",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with product and design teams on feature development",
      ],
      expectations: [
        "3+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and modern JavaScript/TypeScript",
        "Experience with cloud platforms (AWS/Azure) and containerization",
        "Excellent problem-solving and communication skills",
      ],
      benefits: [
        {
          title: "Technical Growth",
          description: "Work with cutting-edge technologies and contribute to architectural decisions.",
        },
        {
          title: "Flexible Work",
          description: "Remote-first culture with flexible hours and work-life balance.",
        },
        {
          title: "Competitive Package",
          description: "Market-competitive salary with equity participation and comprehensive benefits.",
        },
        {
          title: "Learning Budget",
          description: "Annual learning and development budget for courses, conferences, and certifications.",
        },
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Full-time Position",
      subtitle: "Senior UI/UX Designer - Product Design",
      description: "Create intuitive and engaging user experiences for our educational technology platform",
      fullDescription:
        "Join our design team to craft beautiful, user-centered designs that make learning accessible and enjoyable for millions of students worldwide.",
      location: "Mumbai / Remote",
      timing: "Standard business hours with flexible arrangements",
      duration: "Permanent position with career advancement opportunities",
      stipend: "Competitive salary with design tool allowances and creative freedom",
      focusAreas: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create design systems and maintain brand consistency",
        "Collaborate with developers to ensure design implementation",
        "Prototype and iterate on design concepts",
      ],
      expectations: [
        "2+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite, and prototyping tools",
        "Strong portfolio showcasing web and mobile design work",
        "Understanding of user-centered design principles",
      ],
      benefits: [
        {
          title: "Creative Freedom",
          description: "Lead design decisions and shape the visual identity of our products.",
        },
        {
          title: "User Impact",
          description: "Design experiences that directly impact millions of learners globally.",
        },
        {
          title: "Design Tools",
          description: "Access to premium design tools and resources for creative work.",
        },
        {
          title: "Design Community",
          description: "Connect with design communities and attend industry conferences.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      <CursorSpotlight />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Be part of an exciting startup journey. We're building the next generation of educational technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              Remote-first culture
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              Flexible working hours
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              Growth opportunities
            </span>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Job Header */}
                <div className="p-8 border-b border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100 mb-3">{job.type}</Badge>
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">{job.title}</h2>
                      <p className="text-lg text-slate-600 mb-4">{job.subtitle}</p>
                      <p className="text-slate-700">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => setShowApplication(!showApplication)}
                        className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3"
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3"
                      >
                        {selectedJob === job.id ? "Hide Details" : "Learn More"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                {selectedJob === job.id && (
                  <div className="p-8">
                    <Suspense fallback={<div className="animate-pulse bg-slate-200 h-64 rounded-lg"></div>}>
                      <JobDetails job={job} />
                    </Suspense>
                  </div>
                )}

                {/* Application Form */}
                {showApplication && selectedJob === job.id && (
                  <div className="p-8 border-t border-slate-100">
                    <ApplicationForm jobTitle={job.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Think About</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Join our team and be part of an exciting startup journey. We're building the next generation of web
            applications and educational technology that impacts millions of learners worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <div className="space-y-2 text-blue-100">
                <div>About</div>
                <div>Benefits</div>
                <div>Apply</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <div className="space-y-2 text-blue-100">
                <div>E-Cell, A Block, MIT Campus</div>
                <div>thinkabout@gmail.com</div>
                <div>+91 8102117024</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ongoing Projects</h3>
              <div className="space-y-2 text-blue-100">
                <div>Think About Platform</div>
                <div>Educational Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
