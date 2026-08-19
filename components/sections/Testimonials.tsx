"use client"
import * as React from "react";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";
import { reviews } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative overflow-hidden">
      {/* Blue nebula glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
        </div>
        
        <TestimonialSlider reviews={reviews} />
      </div>
    </section>
  )
}
