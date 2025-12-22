"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, GraduationCap, Building } from "lucide-react"

export default function Footprints() {
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

    const element = document.getElementById("footprints")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const locations = [
    {
      city: "New York",
      country: "USA",
      students: 12500,
      courses: 45,
      campuses: 3,
      image: "/placeholder.svg?height=200&width=300",
      established: "2018",
    },
    {
      city: "San Francisco",
      country: "USA",
      students: 8900,
      courses: 38,
      campuses: 2,
      image: "/placeholder.svg?height=200&width=300",
      established: "2019",
    },
    {
      city: "Los Angeles",
      country: "USA",
      students: 7200,
      courses: 32,
      campuses: 2,
      image: "/placeholder.svg?height=200&width=300",
      established: "2020",
    },
    {
      city: "London",
      country: "UK",
      students: 6800,
      courses: 28,
      campuses: 1,
      image: "/placeholder.svg?height=200&width=300",
      established: "2021",
    },
    {
      city: "Toronto",
      country: "Canada",
      students: 5400,
      courses: 25,
      campuses: 1,
      image: "/placeholder.svg?height=200&width=300",
      established: "2022",
    },
    {
      city: "Sydney",
      country: "Australia",
      students: 4200,
      courses: 22,
      campuses: 1,
      image: "/placeholder.svg?height=200&width=300",
      established: "2023",
    },
  ]

  const globalStats = [
    { label: "Countries", value: "15+", icon: MapPin },
    { label: "Cities", value: "25+", icon: Building },
    { label: "Total Students", value: "50K+", icon: Users },
    { label: "Graduates", value: "35K+", icon: GraduationCap },
  ]

  return (
    <section id="footprints" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Global Footprints</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From local communities to global reach, we're proud to serve students across continents and cultures, making
            quality education accessible worldwide.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {globalStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.city}, ${location.country}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Est. {location.established}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  {location.city}, {location.country}
                </CardTitle>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{location.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{location.courses}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-2xl font-bold text-purple-600">{location.campuses}</div>
                    <div className="text-sm text-gray-600">Campus{location.campuses > 1 ? "es" : ""}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Expanding Horizons</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're continuously growing our presence worldwide, with new locations planned for Berlin, Tokyo, Mumbai,
              and São Paulo in 2024. Join us as we make quality education accessible to learners everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Berlin", "Tokyo", "Mumbai", "São Paulo"].map((city, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Coming Soon: {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
