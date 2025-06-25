import React from 'react';
import { PhoneCall } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Join Our School Community?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We're currently accepting applications for the upcoming academic year. Contact us to schedule a visit or learn more about our admission process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              to="/admissions" 
              variant="secondary" 
              size="lg"
            >
              Apply Now
            </Button>
            <Button 
              href="tel:+977-061-123456" 
              variant="outline" 
              size="lg"
              icon={<PhoneCall size={18} />}
              className="border-white text-white hover:bg-white/10 focus:ring-white"
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;