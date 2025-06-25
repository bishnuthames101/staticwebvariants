import React from 'react';
// Correcting import paths to be relative, bypassing alias issues in certain environments.
import PageLayout from '../components/layout/PageLayout'; 
import SectionTitle from '../components/ui/SectionTitle'; 
import Button from '../components/ui/Button'; 
import { Lightbulb, Star, Handshake, ShieldCheck, Users } from 'lucide-react'; // Added 'Users' icon
import { schoolInfo } from '../data/siteData'; // Corrected path to siteData

// Component for a styled feature card
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <div
    className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-accent-400 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up"
    style={{ animationDelay: delay }}
  >
    <div className="text-accent-500 mb-5 text-5xl">
      {icon}
    </div>
    <h3 className="font-heading font-semibold text-2xl mb-3 text-secondary-900">
      {title}
    </h3>
    <p className="text-secondary-700 text-base">
      {description}
    </p>
  </div>
);

const AboutPageVariant2: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - A bold, full-width header with dynamic background */}
      <section className="relative w-full h-[50vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/159740/library-books-bookshelf-book-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        {/* Dark overlay for contrast and text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
              Our Story & Philosophy
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90 animate-slide-up">
              Discover the heart of {schoolInfo.name} – our journey, values, and what drives our commitment to education.
            </p>
          </div>
        </div>
      </section>

      {/* History and Leadership Section - Integrated and visually flowing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* History Text Block */}
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary-900 mb-6">
                A Legacy of Learning Since {schoolInfo.established}
              </h2>
              <p className="text-secondary-700 text-lg mb-6 leading-relaxed">
                Since its establishment in {schoolInfo.established}, {schoolInfo.name} has been a beacon of educational excellence. We began with a pioneering spirit, driven by the belief that quality education is the cornerstone of societal progress. Our journey has been one of continuous growth, adapting to modern pedagogical needs while upholding our core values.
              </p>
              <p className="text-secondary-700 text-lg mb-8 leading-relaxed">
                Over the decades, we've nurtured thousands of bright minds, transforming lives and contributing to the community. Our alumni are testaments to the strong foundation they received here, making impacts globally.
              </p>
              <Button to="/contact" variant="primary">
                Connect With Us
              </Button>
            </div>
            {/* Principal's Message/Image Card */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-primary-600 rounded-xl shadow-2xl p-8 max-w-sm w-full text-center text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Principal John Doe"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h3 className="font-heading font-semibold text-2xl mb-2">Principal's Vision</h3>
                <p className="italic text-white/90 mb-4">
                  "{schoolInfo.principalMessage}"
                </p>
                <p className="font-medium text-lg text-accent-200">
                  Dr. John Doe
                </p>
                <p className="text-sm text-white/80">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side-by-side with distinct visuals */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Guiding Principles"
            subtitle="Driving our future and empowering our students."
            center
            className="[&_h2]:text-white [&_p]:text-white/90 [&_.h-1]:bg-accent-400"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-white/30">
              <div className="text-accent-400 mb-5 text-5xl">
                <Lightbulb size={56} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-3xl mb-3">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {schoolInfo.vision}
              </p>
            </div>
            {/* Mission Card */}
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-white/30">
              <div className="text-accent-400 mb-5 text-5xl">
                <Star size={56} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-3xl mb-3">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {schoolInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - A dynamic, icon-driven grid */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Values That Define Us"
            subtitle="The fundamental principles that shape our community and education."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <FeatureCard 
              icon={<Handshake size={48} />} 
              title="Integrity" 
              description="Upholding strong moral principles and honesty in all actions and interactions."
              delay="0s"
            />
            <FeatureCard 
              icon={<Lightbulb size={48} />} 
              title="Innovation" 
              description="Fostering creative problem-solving and embracing new approaches to learning."
              delay="0.1s"
            />
            <FeatureCard 
              icon={<Users size={48} />} 
              title="Community" 
              description="Building a supportive and inclusive environment where everyone belongs."
              delay="0.2s"
            />
            <FeatureCard 
              icon={<ShieldCheck size={48} />} 
              title="Excellence" 
              description="Striving for the highest standards in academics, character, and personal development."
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Call to Action - Prominent and inviting */}
      <section className="py-20 bg-primary-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-white/90 text-xl mb-10">
            Explore our programs, meet our faculty, and see why EduSite is the right choice for your child.
          </p>
          <Button 
            to="/admissions" 
            variant="secondary" 
            size="lg"
            className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl transform hover:scale-105 transition-transform duration-200"
          >
            Discover Admissions
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPageVariant2;
