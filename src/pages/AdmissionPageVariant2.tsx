import React from 'react';
// Corrected import paths to be relative
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CalendarDays, ClipboardCheck, MessageSquareText, ShieldCheck, BookUser, FileText, Users } from 'lucide-react'; // Added 'Users' icon
import { schoolInfo } from '../data/siteData';

// Component for a styled step card in the process section
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 text-center flex flex-col items-center">
    <div className="text-primary-600 mb-4 text-4xl">
      {icon}
    </div>
    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
      {title}
    </h3>
    <p className="text-secondary-700 text-sm">
      {description}
    </p>
  </div>
);

const AdmissionsPageVariant2: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - Dynamic background with focus on opportunity */}
      <section className="relative w-full h-[55vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
              Unlock Their Potential
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90 mb-8 animate-slide-up">
              Join a community where every student is empowered to learn, grow, and succeed.
            </p>
            <Button
              href={schoolInfo.admissionInfo.downloadUrl}
              variant="secondary"
              size="lg"
              className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl"
            >
              Download Application
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Overview Section - Structured and clear information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Your Path to EduSite Basic"
            subtitle="A simple and straightforward admission process."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary-50 p-6 rounded-lg shadow-md flex items-start gap-4">
              <CalendarDays size={32} className="text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Enrollment Period</h3>
                <p className="text-secondary-700">{schoolInfo.admissionInfo.enrollmentPeriod}</p>
              </div>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg shadow-md flex items-start gap-4">
              <BookUser size={32} className="text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Grades Offered</h3>
                <p className="text-secondary-700">{schoolInfo.admissionInfo.grades}</p>
              </div>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg shadow-md flex items-start gap-4">
              <MessageSquareText size={32} className="text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Need Assistance?</h3>
                <p className="text-secondary-700">Our admissions team is ready to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps - Visual, numbered steps */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="How to Apply"
            subtitle="Follow these simple steps to begin your application."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <StepCard
              icon={<FileText size={48} />}
              title="1. Download Application"
              description="Obtain the official application form from our website or collect it from our office."
            />
            <StepCard
              icon={<ClipboardCheck size={48} />}
              title="2. Prepare Documents"
              description="Gather all required documents as listed in our admission requirements."
            />
            <StepCard
              icon={<MessageSquareText size={48} />}
              title="3. Submit & Interview"
              description="Submit your completed application and attend a scheduled interview/assessment."
            />
          </div>
          <div className="text-center mt-12">
            <Button to="/contact" variant="outline">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern, feature-focused display */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why EduSite Basic?"
            subtitle="Committed to nurturing well-rounded individuals."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-secondary-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="text-primary-600 flex-shrink-0">
                <ShieldCheck size={48} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Accredited Excellence</h3>
                <p className="text-secondary-700">Our school is recognized for its high academic standards and student success.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-secondary-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="text-primary-600 flex-shrink-0">
                <Users size={48} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">Supportive Community</h3>
                <p className="text-secondary-700">A vibrant and inclusive environment where students and families thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action with more prominent contact info */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Contact our admissions office today to learn more and schedule a personalized tour.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl"
            >
              Contact Us
            </Button>
            <Button
              href={schoolInfo.admissionInfo.downloadUrl}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20 focus:ring-white"
            >
              Get Application Form
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdmissionsPageVariant2;
