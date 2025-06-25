import React from 'react';
// Correcting import paths to use the configured path alias
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { CheckCircle, FileText, Send, Calendar, Users, Briefcase, Award } from 'lucide-react'; // Specific icons for this variant
import { schoolInfo, contactInfo } from '@/data/siteData';

// Component for a step in the application process
interface ApplicationStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const ApplicationStep: React.FC<ApplicationStepProps> = ({ stepNumber, title, description }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold text-lg">
      {stepNumber}
    </div>
    <div>
      <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">
        {title}
      </h3>
      <p className="text-secondary-700">
        {description}
      </p>
    </div>
  </div>
);

// Component for a key feature/reason to choose the school
interface KeyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-secondary-50 rounded-lg shadow-sm">
    <div className="text-accent-500 mb-4 text-4xl">
      {icon}
    </div>
    <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">
      {title}
    </h3>
    <p className="text-secondary-700">
      {description}
    </p>
  </div>
);


const AdmissionsPageVariant3: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section - A clean, focused header with clear message */}
      <section className="relative w-full h-[60vh] bg-gradient-to-br from-indigo-700 to-purple-800 text-white flex items-center justify-center">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v36h-2V34zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM48 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2zM12 2v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v24h-2V20zm0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0V0h2v56h-2v-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
            Your Future Starts Here
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 mb-8 animate-slide-up">
            Begin an enriching academic journey with EduSite Basic School. Our admissions team is here to guide you every step of the way.
          </p>
          <div className="animate-slide-up">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl"
            >
              Get in Touch Today
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Key Dates Section - Clear and concise */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Admissions Overview"
            subtitle="Important information to kickstart your application."
            center
          />
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-secondary-900 mb-4">Key Dates & Periods</h3>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary-500 flex-shrink-0" />
                  <span>Enrollment Period: <span className="font-medium">{schoolInfo.admissionInfo.enrollmentPeriod}</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Users size={20} className="text-primary-500 flex-shrink-0" />
                  <span>Grades Offered: <span className="font-medium">{schoolInfo.admissionInfo.grades}</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase size={20} className="text-primary-500 flex-shrink-0" />
                  <span>School Year Starts: <span className="font-medium">August (Annually)</span></span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-2xl text-secondary-900 mb-4">Admission Requirements</h3>
              <ul className="space-y-3 text-secondary-700">
                {schoolInfo.admissionInfo.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-success-500 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process - Step-by-step horizontal/vertical flow */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Simple Application Process"
            subtitle="Guiding you through each step towards enrollment."
            center
            className="[&_h2]:text-white [&_p]:text-white/90 [&_.h-1]:bg-accent-400"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ApplicationStep
              stepNumber={1}
              title="Submit Inquiry"
              description="Fill out our online inquiry form to get detailed information and initiate contact."
            />
            <ApplicationStep
              stepNumber={2}
              title="Application & Documents"
              description="Complete the application form and submit all necessary supporting documents by the deadline."
            />
            <ApplicationStep
              stepNumber={3}
              title="Assessment & Interview"
              description="Qualified applicants will be invited for an assessment test and a personal interview."
            />
            {/* Additional optional steps */}
            <ApplicationStep
              stepNumber={4}
              title="Admission Decision"
              description="Families will be notified of the admission decision and next steps for enrollment."
            />
            <ApplicationStep
              stepNumber={5}
              title="Enrollment Confirmation"
              description="Confirm enrollment by submitting required fees and completing final registration."
            />
            <ApplicationStep
              stepNumber={6}
              title="Welcome to EduSite!"
              description="Join our school community and begin an exciting new chapter of learning."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose EduSite Basic?"
            subtitle="A nurturing environment where every student excels."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <KeyFeature
              icon={<Award size={48} />}
              title="Academic Excellence"
              description="A rigorous curriculum and dedicated faculty ensure high academic standards."
            />
            <KeyFeature
              icon={<Users size={48} />}
              title="Holistic Development"
              description="Beyond academics, we focus on character, leadership, and extracurriculars."
            />
            <KeyFeature
              icon={<Calendar size={48} />}
              title="Modern Facilities"
              description="State-of-the-art infrastructure supports an optimal learning experience."
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action - Direct Contact */}
      <section className="py-20 bg-secondary-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Have Questions? We're Here to Help.
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Our admissions team is dedicated to supporting your family through this exciting process. Reach out to us for personalized assistance.
          </p>
          <Button
            href={`mailto:${contactInfo.email}`} // Direct email link
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/20 focus:ring-white"
            icon={<Send size={20} />}
          >
            Email Our Admissions Office
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdmissionsPageVariant3;
