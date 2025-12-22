"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "We're looking for a passionate Full Stack Developer to join our team and help build the future of online education.",
    requirements: ["React.js, Node.js, TypeScript", "Experience with databases", "Strong problem-solving skills"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Mumbai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our design team to create intuitive and engaging user experiences for our educational platform.",
    requirements: ["Figma, Adobe Creative Suite", "User research experience", "Portfolio of web/mobile designs"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Content Creator & Instructor",
    department: "Education",
    location: "Remote",
    type: "Contract",
    experience: "1-3 years",
    description: "Create engaging educational content and teach courses in programming, design, or digital marketing.",
    requirements: ["Subject matter expertise", "Teaching experience", "Video creation skills"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Delhi / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Drive growth through digital marketing strategies, SEO, social media, and performance marketing.",
    requirements: ["Google Ads, Facebook Ads", "SEO/SEM experience", "Analytics tools proficiency"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Pune / Remote",
    type: "Full-time",
    experience: "3-6 years",
    description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and ensure platform reliability.",
    requirements: ["AWS/Azure experience", "Docker, Kubernetes", "Infrastructure as Code"],
    posted: "1 week ago",
  },
]

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const handleApply = (jobTitle: string) => {
    const message = `Hi! I'm interested in applying for the ${jobTitle} position at Think About.`
    const whatsappLink = `https://wa.me/+918102117024?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="career" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Be part of our mission to transform education through technology. We're looking for passionate individuals
            who want to make a difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">50+</h3>
            <p className="text-slate-600">Team Members</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">5</h3>
            <p className="text-slate-600">Office Locations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Remote</h3>
            <p className="text-slate-600">Work Options</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Flexible</h3>
            <p className="text-slate-600">Work Hours</p>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Current Openings</h3>
          <div className="grid gap-6 md:gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-900">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-blue-900 mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-base">{job.description}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-900">
                        {job.department}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Posted {job.posted}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-sm">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleApply(job.title)}
                      className="bg-blue-900 hover:bg-blue-800 text-white flex-1 sm:flex-none"
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </Button>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">About this role:</h4>
                      <p className="text-slate-700 mb-4">
                        This is an exciting opportunity to work with a dynamic team in a fast-growing edtech company.
                        You'll have the chance to impact thousands of learners while working with cutting-edge
                        technologies.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-blue-900 mb-2">What we offer:</h5>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Competitive salary & equity</li>
                            <li>• Health insurance</li>
                            <li>• Learning & development budget</li>
                            <li>• Flexible work arrangements</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-900 mb-2">Ideal candidate:</h5>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Passionate about education</li>
                            <li>• Strong communication skills</li>
                            <li>• Team player with growth mindset</li>
                            <li>• Problem-solving attitude</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't see the right role?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to
            contribute to our mission.
          </p>
          <Button
            onClick={() => handleApply("General Application")}
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
          >
            Send Your Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
