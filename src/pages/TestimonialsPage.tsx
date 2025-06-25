import React from 'react';
import { Quote } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { testimonials } from '../data/siteData';

const TestimonialsPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-primary-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            Testimonials
          </h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Community Says"
            subtitle="Hear from our principal, parents, students, and alumni about their experiences"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="p-6 animate-fade-in"
                hover
              >
                <div className="text-primary-300 mb-4">
                  <Quote size={32} />
                </div>
                <p className="text-secondary-700 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-secondary-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Principal's Message"
            center
          />
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <div className="text-primary-300 mb-4">
                  <Quote size={32} />
                </div>
                <p className="text-secondary-700 italic mb-6 text-lg">
                  "As the Principal of EduSite Basic School, I am proud of our commitment to educational excellence and the development of well-rounded individuals. Our dedicated faculty, supportive parents, and enthusiastic students create a vibrant learning community where innovation, critical thinking, and character development are prioritized.
                  <br /><br />
                  We believe that education goes beyond textbooks and classrooms. Our goal is to prepare students not just for exams, but for life. We strive to instill values of integrity, respect, and social responsibility while nurturing their talents and academic potential.
                  <br /><br />
                  I invite you to visit our campus and experience firsthand the positive, engaging environment we have created for our students."
                </p>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-secondary-900">
                    {testimonials[0].name}
                  </h3>
                  <p className="text-primary-500">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Join Our School Community
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Experience the quality education and supportive environment that our students and parents appreciate.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPage;