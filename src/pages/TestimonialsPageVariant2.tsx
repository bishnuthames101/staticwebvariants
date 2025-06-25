import React from 'react';
// Correcting import paths to use the configured path alias
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Quote, Star, MessageSquareText } from 'lucide-react'; // Icons for this variant
import { testimonials, schoolInfo } from '@/data/siteData';

// Component for a styled testimonial card
interface TestimonialCardVariant2Props {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
  };
}

const TestimonialCardVariant2: React.FC<TestimonialCardVariant2Props> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent-400 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <Quote size={40} className="text-primary-500 mx-auto mb-4" />
    <p className="text-secondary-800 italic text-lg mb-6">
      "{testimonial.content}"
    </p>
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-secondary-200"
    />
    <h3 className="font-heading font-semibold text-xl text-secondary-900">
      {testimonial.name}
    </h3>
    <p className="text-primary-600 text-sm">{testimonial.role}</p>
  </div>
);

const TestimonialsPageVariant2: React.FC = () => {
  // Find the principal's testimonial for a dedicated section
  const principalTestimonial = testimonials.find(t => t.role.toLowerCase().includes('principal'));

  return (
    <PageLayout>
      {/* Hero Section - Emphasizing community voice */}
      <section className="relative w-full h-[50vh] bg-gradient-to-br from-purple-700 to-fuchsia-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v36h-2V34zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM48 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM12 2v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
            Voices of Our Community
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 animate-slide-up">
            Hear directly from our students, parents, and alumni about their fulfilling experiences at {schoolInfo.name}.
          </p>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="py-20 bg-secondary-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Community Says"
            subtitle="Authentic feedback reflecting our commitment to excellence."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCardVariant2 key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Principal's Message Section (if available) */}
      {principalTestimonial && (
        <section className="py-20 bg-primary-500 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionTitle
              title="A Word from Our Principal"
              subtitle="Leadership thoughts on our educational philosophy."
              center
              className="[&_h2]:text-white [&_p]:text-white/90 [&_.h-1]:bg-accent-400"
            />
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <img
                src={principalTestimonial.image}
                alt={principalTestimonial.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-accent-400 flex-shrink-0 shadow-lg"
              />
              <div className="text-center md:text-left">
                <Quote size={48} className="text-accent-400 mb-4 inline-block" />
                <p className="italic text-lg mb-6 leading-relaxed">
                  "{principalTestimonial.content}"
                </p>
                <h3 className="font-heading font-semibold text-xl text-accent-200">
                  {principalTestimonial.name}
                </h3>
                <p className="text-white/80">{principalTestimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Testimonials Matter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Building Trust Through Experiences"
            subtitle="Why feedback is invaluable to our growth."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <Star size={36} className="text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Authentic Insights</h3>
                <p className="text-secondary-700">Real stories from real people in our school community.</p>
              </div>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg shadow-md flex items-center gap-4">
              <MessageSquareText size={36} className="text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Continuous Improvement</h3>
                <p className="text-secondary-700">Your feedback helps us grow and provide better education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-secondary-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Share Your EduSite Story!
          </h2>
          <p className="text-white/90 text-xl mb-8">
            If you've had a positive experience with EduSite Basic School, we'd love to hear from you.
          </p>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/20 focus:ring-white"
          >
            Submit Your Testimonial
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPageVariant2;
