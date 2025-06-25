import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-400 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8617324/pexels-photo-8617324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Nurturing Minds, Building Futures
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            A quality educational institution dedicated to academic excellence and character development for students in Nepal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              to="/admissions" 
              variant="secondary" 
              size="lg"
              icon={<ChevronRight size={20} />}
            >
              Apply for Admission
            </Button>
            <Button 
              to="/about" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 focus:ring-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;