import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

// HomePageVariant2 component defines an alternative UI design for the home page.
const HomePageVariant2: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - A distinct, impactful introduction for this variant */}
      <section className="relative bg-gradient-to-br from-blue-700 to-indigo-900 overflow-hidden text-white py-24 md:py-32 lg:py-40">
        {/* Background overlay with a subtle pattern or image */}
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0A3B66/FFFFFF?text=Modern+School+Building')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in">
            Empowering Futures Through Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-slide-up">
            A forward-thinking educational institution dedicated to fostering creativity, critical thinking, and global citizenship.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
            {/* Call to action buttons */}
            <Button 
              to="/admissions" 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-100 shadow-lg"
            >
              Enroll Now
            </Button>
            <Button 
              to="/gallery" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20 focus:ring-white"
            >
              Explore Campus
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Message Section - A personalized greeting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="A Message from Our Principal" 
            subtitle="Leading with vision and dedication" 
            center 
          />
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-blue-50 p-8 rounded-lg shadow-md">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Principal John Doe" 
              className="w-32 h-32 rounded-full object-cover shadow-lg flex-shrink-0" 
            />
            <div>
              <p className="text-lg text-secondary-700 italic mb-4">
                "At EduSite Advanced School, we believe in creating an environment where every student feels inspired to learn, innovate, and grow. Our commitment to academic rigor, character development, and community engagement ensures that our graduates are well-prepared for the challenges of tomorrow."
              </p>
              <h3 className="font-heading font-semibold text-xl text-blue-800">
                Dr. John Doe
              </h3>
              <p className="text-primary-600">Principal, EduSite Advanced School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs/Offerings Section - Showcasing unique aspects */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Distinctive Programs" 
            subtitle="Tailored learning experiences for every student" 
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4 text-4xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                  <path d="M21.43 14.16c-1.35-.15-2.2-.82-2.8-1.5-.6-.7-1-1.4-1.4-2.2a2.34 2.34 0 0 0-.4-2.4C16.5 6.5 15.3 6 14.2 5.75c-1-.1-2-.1-3.2-.05-1.2.05-2.2.05-3.3.15-1.15.1-2.05.45-2.85.8-1.7.9-2.7 2-3.2 3.3-.4 1.2-.4 2.5-.4 3.4 0 .8.1 1.7.3 2.5.2.8.4 1.5.6 2.1l.1.1c.4.6.8 1.1 1.4 1.5.6.4 1.2.6 1.9.8.7.2 1.4.2 2.2.2h5c.8 0 1.5-.05 2.2-.2.7-.1 1.3-.3 1.9-.6.6-.3 1.1-.7 1.5-1.2l.1-.1c.3-.6.5-1.2.7-2 .2-.8.3-1.6.3-2.5s-.1-1.7-.4-2.9Z"/><path d="M4.2 14.8c-.8-.8-1.2-1.8-1.4-2.8-.2-.9-.2-2.1-.2-2.9-.1-.8-.1-1.6 0-2.4.1-.8.2-1.5.4-2.1.2-.6.4-1.1.7-1.5l.1-.1c.4-.6.8-1.1 1.4-1.5.6-.4 1.2-.6 1.9-.8.7-.2 1.4-.2 2.2-.2h5c.8 0 1.5.05 2.2.2.7.1 1.3.3 1.9.6.6.3 1.1.7 1.5 1.2l.1.1c.3.6.5 1.2.7 2 .2.8.3 1.6.3 2.5s-.1 1.7-.4 2.9c-.3 1.1-.7 2.1-1.4 2.9-.7.8-1.6 1.4-2.5 1.7-.9.3-1.9.4-2.9.4h-5c-.8 0-1.5-.05-2.2-.2-.7-.1-1.3-.3-1.9-.6-.6-.3-1.1-.7-1.5-1.2L4.2 14.8Z" opacity="0.2"/><path d="m14.5 12.5-2.8-2.8a2 2 0 0 1-2.8 0L6.1 12.5a2 2 0 0 0-1 1.7v2.6a1 1 0 0 0 .5.8l3.1 1.8a2 2 0 0 0 2 0l3.1-1.8a1 1 0 0 0 .5-.8v-2.6a2 2 0 0 0-1-1.7Z"/><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                STEM Excellence
              </h3>
              <p className="text-secondary-700">
                Advanced curriculum in Science, Technology, Engineering, and Mathematics to prepare future innovators.
              </p>
            </div>
            {/* Program Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4 text-4xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush">
                  <path d="M18.37 2.63c-1.88-1.88-4.9-1.88-6.79 0l-5.79 5.79c-1.88 1.88-1.88 4.9 0 6.79l5.79 5.79c1.88 1.88 4.9 1.88 6.79 0l5.79-5.79c1.88-1.88 1.88-4.9 0-6.79l-5.79-5.79Z"/><path d="m15 5 4 4"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                Creative Arts Focus
              </h3>
              <p className="text-secondary-700">
                Nurturing artistic talents through comprehensive programs in visual arts, music, and drama.
              </p>
            </div>
            {/* Program Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4 text-4xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                Global Perspectives
              </h3>
              <p className="text-secondary-700">
                Promoting cultural understanding and global awareness through diverse studies and international exchange programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact / Call to Action */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to learn more about EduSite?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our admissions team is here to guide you through the process. Reach out today!
          </p>
          <Button 
            to="/contact" 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/20 focus:ring-white"
          >
            Contact Our Team
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePageVariant2;
