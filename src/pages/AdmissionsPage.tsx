import React from 'react';
import { Calendar, FileText, Download, CheckCircle } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { schoolInfo } from '../data/siteData';

const AdmissionsPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-primary-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            Admissions
          </h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Join Our School"
            subtitle="We welcome applications from students interested in quality education"
            center
          />
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-50 p-6 flex items-center gap-4 border-b border-primary-100">
              <Calendar size={32} className="text-primary-500" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-secondary-900">
                  Enrollment Period
                </h3>
                <p className="text-secondary-700">
                  {schoolInfo.admissionInfo.enrollmentPeriod}
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-4">
                  Available Programs
                </h3>
                <p className="text-secondary-700 mb-2">
                  We offer education from {schoolInfo.admissionInfo.grades}
                </p>
                <p className="text-secondary-700">
                  Our curriculum follows the national education standards with additional focus on language skills, technology, and personal development.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-4">
                  Admission Requirements
                </h3>
                <ul className="space-y-2">
                  {schoolInfo.admissionInfo.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-4">
                  Admission Process
                </h3>
                <p className="text-secondary-700">
                  {schoolInfo.admissionInfo.process}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href={schoolInfo.admissionInfo.downloadUrl} 
                  icon={<Download size={18} />}
                >
                  Download Application Form
                </Button>
                <Button 
                  to="/contact" 
                  variant="outline"
                >
                  Contact Admissions Office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-secondary-900 mb-6">
                Why Choose Us?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900">Quality Education</h3>
                    <p className="text-secondary-700">Our curriculum is designed to foster critical thinking and practical skills.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900">Experienced Faculty</h3>
                    <p className="text-secondary-700">Our teachers are experienced professionals dedicated to student success.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900">Modern Facilities</h3>
                    <p className="text-secondary-700">We provide well-equipped classrooms, libraries, and labs for enhanced learning.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900">Holistic Development</h3>
                    <p className="text-secondary-700">We focus on academic, physical, social, and emotional development.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[url('https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-80 rounded-lg shadow-md animate-fade-in"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Ready to Apply?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            We're excited to welcome new students to our school community. Download the application form or contact our admissions office for more information.
          </p>
          <Button 
            href={schoolInfo.admissionInfo.downloadUrl}
            variant="secondary" 
            size="lg"
            icon={<FileText size={18} />}
          >
            Get Application Form
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdmissionsPage;