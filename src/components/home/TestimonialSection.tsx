import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/siteData';

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What People Say"
          subtitle="Hear from our school community about their experiences"
          center
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md p-6 md:p-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-secondary-700 italic mb-4">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-secondary-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-sm text-secondary-700 hover:text-primary-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary-500' : 'bg-secondary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-sm text-secondary-700 hover:text-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;