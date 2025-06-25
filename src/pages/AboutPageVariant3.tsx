import React from 'react';
// Correcting import paths to be relative based on standard project structure
// Assuming AboutPageVariant3.tsx is in src/pages/
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
// Ensure all necessary Lucide icons are imported
import { Sparkles, Building, Briefcase, Users, Trophy, ChevronRight, LayoutGrid, Goal, Lightbulb } from 'lucide-react';
import { schoolInfo } from '../data/siteData';

// Reusable Card component for a clean, modern look
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, delay = '0s' }) => (
  <div 
    className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <div className="text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
      {title}
    </h3>
    <p className="text-secondary-700">
      {description}
    </p>
  </div>
);

// Component for a team member card
interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, title, bio }) => (
  <div className="bg-secondary-50 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    <img 
      src={image} 
      alt={name} 
      className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-primary-300"
    />
    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-1">{name}</h3>
    <p className="text-primary-600 text-sm mb-3">{title}</p>
    <p className="text-secondary-700 text-sm italic">{bio}</p>
  </div>
);

const AboutPageVariant3: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - A bold, geometric header with abstract shapes */}
      <section className="relative w-full h-[60vh] bg-gradient-to-br from-purple-800 to-indigo-700 overflow-hidden text-white flex items-center justify-center">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
            Who We Are: Our Foundation
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 animate-slide-up max-w-3xl mx-auto">
            A pioneering institution committed to nurturing intellect, character, and community spirit.
          </p>
          <div className="mt-8 animate-slide-up">
            <Button 
              to="/admissions" 
              variant="secondary" 
              size="lg"
              className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-lg"
            >
              Discover More <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Journey Section - Timeline like presentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Enduring Journey"
            subtitle="Tracing the milestones that shaped our educational path."
            center
          />
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line for timeline - now hidden by default on all screens for the user's request */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary-200 hidden md:block"></div> */}
            
            <div className="space-y-12">
              {/* Timeline Event 1 (Left Aligned on Desktop, with text on left) */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start">
                <div className="z-10 bg-primary-500 text-white rounded-full p-3 shadow-lg flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Building size={24} />
                </div>
                <div className="md:w-1/2 text-left">
                  <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">Established in {schoolInfo.established}</h3>
                  <p className="text-secondary-700">
                    Founded with a vision to provide accessible and quality education to the community. Our humble beginnings laid the groundwork for future growth.
                  </p>
                </div>
              </div>

              {/* Timeline Event 2 (Right Aligned on Desktop, with text on right) */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end">
                <div className="md:w-1/2 md:text-right md:pr-6 order-2 md:order-1">
                  <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">Curriculum Innovation (Early 2010s)</h3>
                  <p className="text-secondary-700">
                    Introduced advanced pedagogical methods and integrated technology into the learning process.
                  </p>
                </div>
                <div className="z-10 bg-primary-500 text-white rounded-full p-3 shadow-lg flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0 md:ml-6">
                  <Sparkles size={24} />
                </div>
              </div>

              {/* Timeline Event 3 (Left Aligned on Desktop, with text on left) */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start">
                <div className="z-10 bg-primary-500 text-white rounded-full p-3 shadow-lg flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <LayoutGrid size={24} />
                </div>
                <div className="md:w-1/2 text-left">
                  <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">Expansion & Modernization (Mid 2010s)</h3>
                  <p className="text-secondary-700">
                    Expanded campus facilities, including new science labs and a modern library, enhancing student resources.
                  </p>
                </div>
              </div>

              {/* Timeline Event 4 (Right Aligned on Desktop, with text on right) */}
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end">
                <div className="md:w-1/2 md:text-right md:pr-6 order-2 md:order-1">
                  <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">Recent Achievements (2020s)</h3>
                  <p className="text-secondary-700">
                    Recognized for academic excellence and student achievements in national competitions.
                  </p>
                </div>
                <div className="z-10 bg-primary-500 text-white rounded-full p-3 shadow-lg flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0 md:ml-6">
                  <Trophy size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Team Section */}
      <section className="py-20 bg-secondary-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet Our Driving Force"
            subtitle="The dedicated individuals leading our school community."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMemberCard 
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Dr. Alok Verma"
              title="Principal"
              bio="An visionary leader with over 20 years of experience in educational administration."
            />
            <TeamMemberCard 
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Ms. Priya Singh"
              title="Academic Director"
              bio="Passionate about curriculum development and student-centered learning methodologies."
            />
            <TeamMemberCard 
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Mr. Rahul Gupta"
              title="Head of Admissions"
              bio="Committed to welcoming diverse talents and guiding families through our school."
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values - Combined, distinct layout */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Identity"
            subtitle="The principles that guide every aspect of EduSite."
            center
            className="[&_h2]:text-white [&_p]:text-white/80 [&_.h-1]:bg-accent-400"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <InfoCard
              icon={<Lightbulb size={48} />}
              title="Our Vision"
              description={schoolInfo.vision}
              delay="0s"
            />
            <InfoCard
              icon={<Goal size={48} />}
              title="Our Mission"
              description={schoolInfo.mission}
              delay="0.1s"
            />
            <InfoCard
              icon={<Users size={48} />} // Using Users icon to represent community/values
              title="Our Values"
              description={schoolInfo.values.join(', ')} // Join values for display
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action - Eye-catching and direct */}
      <section className="py-20 bg-accent-400 text-secondary-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Join Our Growing Family!
          </h2>
          <p className="text-secondary-800 text-xl mb-10">
            Discover a place where potential is unleashed and dreams take flight.
          </p>
          <Button 
            to="/admissions" 
            variant="primary" 
            size="lg"
            className="bg-primary-600 text-white hover:bg-primary-700 shadow-xl transform hover:scale-105 transition-transform duration-200"
          >
            Apply Today!
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPageVariant3;
