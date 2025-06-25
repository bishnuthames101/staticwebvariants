import React from 'react';
// Correcting import paths to use the configured path alias
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { MessageSquareQuote, ChevronLeft, ChevronRight, UserRound} from 'lucide-react'; // New icons for this variant
import { testimonials, schoolInfo } from '@/data/siteData';

// Component for an individual testimonial slide
interface TestimonialSlideProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
  };
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-2xl mx-auto max-w-3xl">
    <MessageSquareQuote size={60} className="text-primary-500 mb-6" />
    <p className="text-secondary-800 italic text-xl md:text-2xl leading-relaxed mb-8">
      "{testimonial.content}"
    </p>
    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
      />
      <div>
        <h3 className="font-heading font-semibold text-xl text-secondary-900">
          {testimonial.name}
        </h3>
        <p className="text-primary-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);


const TestimonialsPageVariant3: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <PageLayout>
      {/* Hero Section - Bold and inviting with a soft background */}
      <section className="relative w-full h-[55vh] bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center">
        {/* Abstract shapes in background */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
            Hear Their Stories
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 mb-8 animate-slide-up">
            Authentic experiences from the heart of our vibrant school community.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-secondary-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Testimonial"
            subtitle="Insights from our community members."
            center
          />
          <div className="relative">
            <TestimonialSlide testimonial={currentTestimonial} />
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-secondary-200 transition-colors hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-secondary-200 transition-colors hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonialIndex === index ? 'bg-primary-600' : 'bg-secondary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Section - More prominent and distinct */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {schoolInfo.principalMessage && (
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder for principal image
                alt="Principal"
                className="w-40 h-40 rounded-full object-cover border-4 border-accent-400 flex-shrink-0 shadow-lg"
              />
              <div className="text-center md:text-left">
                <h2 className="font-heading font-bold text-4xl mb-4 text-accent-200">
                  A Message from Our Principal
                </h2>
                <p className="italic text-lg md:text-xl leading-relaxed mb-6">
                  "{schoolInfo.principalMessage}"
                </p>
                <p className="font-semibold text-xl text-white">
                  {testimonials.find(t => t.role.toLowerCase().includes('principal'))?.name || 'Our Principal'}
                </p>
                <p className="text-white/80">Principal, {schoolInfo.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <SectionTitle
            title="Have a Story to Share?"
            subtitle="We love hearing about the positive impact our school has had."
            center
          />
          <div className="bg-secondary-50 p-8 rounded-lg shadow-md">
            <UserRound size={60} className="text-primary-600 mx-auto mb-6" />
            <p className="text-secondary-700 text-lg mb-6">
              Your experience could inspire future students and families. We invite you to share your testimonial!
            </p>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Submit Your Story
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPageVariant3;
