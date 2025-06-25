import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { contactInfo } from '../data/siteData';

const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-primary-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you. Send us a message or visit us at our campus."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-xl mb-6 text-secondary-800">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-50 rounded-full text-primary-500 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-1">Address</h4>
                      <p className="text-secondary-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-50 rounded-full text-primary-500 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-1">Phone</h4>
                      <a 
                        href={`tel:${contactInfo.phone}`} 
                        className="text-secondary-600 hover:text-primary-500 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-50 rounded-full text-primary-500 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-secondary-600 hover:text-primary-500 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-secondary-900 mb-2">Office Hours</h4>
                  <ul className="text-secondary-600 space-y-1">
                    <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
                    <li>Saturday: 8:00 AM - 12:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-xl mb-6 text-secondary-800">
                  Send Us a Message
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Find Us"
            subtitle="Visit our campus located in the heart of Pokhara, Nepal"
            center
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;