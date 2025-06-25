import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import { schoolInfo } from '../data/siteData';

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-primary-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            About {schoolInfo.name}
          </h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-secondary-900 mb-6">
                Our History
              </h2>
              <p className="text-secondary-700 mb-6">
                Established in {schoolInfo.established}, {schoolInfo.name} has been providing quality education to students in Nepal for over {new Date().getFullYear() - parseInt(schoolInfo.established)} years. We started with a small campus and a vision to transform education in our community.
              </p>
              <p className="text-secondary-700 mb-6">
                Over the years, we've grown to become one of the most respected educational institutions in the region, known for our academic excellence and holistic approach to education.
              </p>
              <div className="p-6 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-3">
                  Principal's Message
                </h3>
                <p className="text-secondary-700 italic">
                  "{schoolInfo.principalMessage}"
                </p>
              </div>
            </div>
            <div className="bg-[url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-80 md:h-96 rounded-lg shadow-md animate-fade-in"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Vision & Mission"
            subtitle="Guided by strong values and clear objectives"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-400 animate-slide-up">
              <div className="mb-4 text-primary-500">
                <Target size={36} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-secondary-800">
                Our Vision
              </h3>
              <p className="text-secondary-700">
                {schoolInfo.vision}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-primary-500">
                <Target size={36} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-secondary-800">
                Our Mission
              </h3>
              <p className="text-secondary-700">
                {schoolInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our educational approach"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {schoolInfo.values.map((value, index) => (
              <div 
                key={index} 
                className="p-5 bg-white rounded-lg shadow-sm border border-secondary-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-center font-medium text-secondary-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Achievements"
            subtitle="Recognitions that reflect our commitment to excellence"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {schoolInfo.achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-2 bg-primary-50 rounded-full text-primary-500">
                  <Award size={24} />
                </div>
                <p className="font-medium text-secondary-800">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Join Our School Community
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We invite you to be part of our educational journey. Visit our campus to experience our learning environment firsthand.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;