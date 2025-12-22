"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constant";

const TestimonialSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Show only first 6 testimonials initially (approximately 2 rows in bento layout)
  const initialCount = 6;
  const visibleTestimonials = showMore
    ? TESTIMONIALS
    : TESTIMONIALS.slice(0, initialCount);

  const StarRating = ({ rating }: { rating: any }) => (
    <div
      className="flex space-x-1 mb-3"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  // Bento grid layout patterns
  const getBentoClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-1", // Wide card
      "md:col-span-1 md:row-span-1", // Regular card
      "md:col-span-1 md:row-span-1", // Regular card
      "md:col-span-1 md:row-span-1", // Regular card
      "md:col-span-1 md:row-span-1", // Regular card
       "md:col-span-2 md:row-span-1", // Wide card
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="bg-gradient-to-br from-gray-300/80 via-white to-gray-300/80 py-16 px-4 sm:px-6 lg:px-8 min-h-screen lg:min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients
            have to say about their experience.
          </p>
        </div>

        {/* Bento Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 auto-rows-fr">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 hover:scale-[1.02] ${getBentoClass(index)} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Quote Icon and Rating */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-6 h-6 text-indigo-200 flex-shrink-0" />
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Content */}
              <blockquote
                className={`text-gray-700 mb-6 leading-relaxed ${
                  getBentoClass(index).includes("col-span-2")
                    ? "text-lg"
                    : "text-base"
                }`}
              >
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full object-contain border-2 border-indigo-100"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50/20 to-purple-50/20 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {TESTIMONIALS.length > initialCount && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              aria-expanded={showMore}
              aria-controls="testimonials-grid"
            >
              <span className="font-medium">
                {showMore
                  ? `Show Less`
                  : `Show ${TESTIMONIALS.length - initialCount} More Reviews`}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Hidden testimonials for screen readers */}
        <div id="additional-testimonials" className="sr-only">
          {showMore &&
            TESTIMONIALS.slice(initialCount).map((testimonial) => (
              <div key={`sr-${testimonial.id}`}>
                <h4>
                  {testimonial.name}, {testimonial.role}
                </h4>
                <p>Rating: {testimonial.rating} out of 5 stars</p>
                <blockquote>{testimonial.content}</blockquote>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: 100vh;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Custom bento grid auto-sizing */
        .auto-rows-fr {
          grid-auto-rows: minmax(200px, auto);
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
