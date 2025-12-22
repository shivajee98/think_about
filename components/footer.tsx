"use client"

import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, MapPin, X, ArrowRight, Heart } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ]

  const courses = [
    { name: "Java Programming", href: "#" },
    { name: "C++ Fundamentals", href: "#" },
    { name: "UX/UI Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Cybersecurity", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
  ]

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Instructor Portal", href: "#" },
    { name: "Community Support", href: "https://wa.me/+918102117024?text=Hi! I'm interested in learning more about Think About courses." },
  ]

  const socialLinks = [
    { icon: X, href: "https://x.com/ThinkAbout__in", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/thinkabout.official/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/107836984/admin/dashboard/", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-900 overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-2">
               <div className="relative w-48 h-12">
                <Image
                    alt="Think About Logo"
                    src="/try.png"
                    fill
                    className="object-contain object-left"
                />
               </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-base max-w-sm">
              Transforming education through technology and innovation. Join thousands of students worldwide in their
              learning journey with our expertly crafted courses.
            </p>
            <div className="space-y-4">
              <a href="mailto:care@thinkabout.in" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                </div>
                <span>care@thinkabout.in</span>
              </a>
              <a href="tel:+918102117024" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                </div>
                <span>+91 81021 17024</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <span>Mithanpura Muzaffarpur, Bihar</span>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses - Spans 3 columns */}
          <div className="lg:col-span-3 md:col-span-4">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Popular Courses
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Spans 2 columns */}
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-slate-500 text-sm flex items-center justify-center md:justify-start">
                © {new Date().getFullYear()} Think About. Made with
                <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500 animate-pulse" />
                for learners worldwide.
              </p>
            </div>

            <div className="flex space-x-4 order-1 md:order-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
