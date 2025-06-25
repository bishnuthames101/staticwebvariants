import React from 'react';
import { BookOpen, Users, Medal, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: <BookOpen size={36} className="text-primary-500" />,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed to foster academic excellence and critical thinking skills.',
  },
  {
    icon: <Users size={36} className="text-primary-500" />,
    title: 'Experienced Faculty',
    description: 'Dedicated teachers committed to nurturing each student\'s unique potential and learning style.',
  },
  {
    icon: <Medal size={36} className="text-primary-500" />,
    title: 'Holistic Development',
    description: 'Focus on character building, leadership skills, and extracurricular activities.',
  },
  {
    icon: <Calendar size={36} className="text-primary-500" />,
    title: 'Modern Facilities',
    description: 'Well-equipped classrooms, library, computer lab, and sports facilities to enhance learning.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We provide a nurturing environment where students can discover their potential and excel academically."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-secondary-800">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;