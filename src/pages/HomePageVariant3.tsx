import React from 'react';
// Correcting import paths for components to be relative
import PageLayout from '@/components/layout/PageLayout';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { User, BookOpen, Award, GraduationCap } from 'lucide-react'; // Importing icons

// Helper component for stat cards, specific to this variant's design
interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
    <div className="text-primary-500 mb-4 text-5xl">
      {icon || <GraduationCap size={48} />}
    </div>
    <h3 className="font-heading font-bold text-5xl text-secondary-900 mb-2">
      {value}
    </h3>
    <p className="text-secondary-600 text-lg font-medium">
      {label}
    </p>
  </div>
);

// HomePageVariant3 component with a unique and modern UI design
const HomePageVariant3: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - Bold, full-width, with distinct typography and overlay */}
      <section className="relative w-full h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/17646194/pexels-photo-17646194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-6 animate-fade-in drop-shadow-lg">
              Inspiring Excellence, Shaping Futures
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 font-light opacity-90 animate-slide-up">
              A dynamic learning environment where innovation meets tradition, preparing students for a world of possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
              <Button
                to="/admissions"
                variant="primary"
                size="lg"
                className="bg-accent-400 text-secondary-900 hover:bg-accent-300 transform hover:scale-105 transition-transform duration-200 shadow-xl"
              >
                Join Our Community
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-transform duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements - Impactful Statistics */}
      <section className="py-20 bg-secondary-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Impact at a Glance"
            subtitle="Celebrating our dedication to student success and academic excellence."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <StatCard value="98%" label="Graduation Rate" icon={<Award size={48} />} />
            <StatCard value="15+" label="Years of Excellence" icon={<BookOpen size={48} />} />
            <StatCard value="1200+" label="Happy Students" icon={<User size={48} />} />
            <StatCard value="Top Tier" label="Academic Ranking" icon={<GraduationCap size={48} />} />
          </div>
        </div>
      </section>

      {/* Campus Life Snapshot - Visually rich grid of images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="A Glimpse into Campus Life"
            subtitle="Experience the vibrant community and diverse activities at our school."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image Card 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/8617857/pexels-photo-8617857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Classroom learning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Engaging Classroom Sessions</p>
              </div>
            </div>
            {/* Image Card 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Outdoor sports"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Dynamic Sports Activities</p>
              </div>
            </div>
            {/* Image Card 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/8423102/pexels-photo-8423102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cultural event"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Vibrant Cultural Programs</p>
              </div>
            </div>
            {/* Image Card 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/159844/book-reading-old-books-pages-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Library"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Rich Library Resources</p>
              </div>
            </div>
            {/* Image Card 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Computer lab"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Modern Tech Labs</p>
              </div>
            </div>
            {/* Image Card 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
              <img
                src="https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Group activity"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">Collaborative Group Activities</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button to="/gallery" icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>}>
              View All Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern card layout */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose EduSite Advanced?"
            subtitle="Dedicated to fostering an environment where every student excels."
            center
            // Override subtitle color for dark background
            className="[&_p]:text-white/80 [&_.h-1]:bg-accent-400"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-white/20">
              <div className="text-accent-400 mb-5 text-5xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h6z"/><path d="M10 12H8"/><path d="M16 12h2"/><path d="M16 18h2"/><path d="M10 18H8"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3 text-white">
                Innovative Curriculum
              </h3>
              <p className="text-white/80 text-base">
                A modern curriculum that blends traditional values with contemporary learning methods, fostering critical thinking.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-white/20">
              <div className="text-accent-400 mb-5 text-5xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3 text-white">
                Dedicated Faculty
              </h3>
              <p className="text-white/80 text-base">
                Our passionate educators are committed to guiding students through personalized learning journeys.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white/10 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-white/20">
              <div className="text-accent-400 mb-5 text-5xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2">
                  <path d="M6 22V7H4V2h12v5h2v15H6ZM10 14h6v2h-6v-2Zm0-4h6v2h-6v-2Zm0-4h6v2h-6v-2Z"/><path d="M22 22V10h-4v12h4Z"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3 text-white">
                Modern Facilities
              </h3>
              <p className="text-white/80 text-base">
                State-of-the-art classrooms, labs, and recreational areas designed for an optimal learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section - Clear and prominent */}
      <section className="py-20 bg-primary-500 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Begin Your Child's Journey of Discovery
          </h2>
          <p className="text-white/90 text-xl mb-10">
            Join a community that values growth, learning, and individuality. We're excited to welcome you.
          </p>
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary-800 hover:bg-primary-100 shadow-xl transform hover:scale-105 transition-transform duration-200"
          >
            Schedule a Visit
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePageVariant3;
