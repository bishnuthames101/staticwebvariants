import React from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { navLinks, contactInfo } from '../../data/siteData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={28} className="text-primary-300" />
              <span className="font-heading font-bold text-xl">EduSite Basic</span>
            </div>
            <p className="text-secondary-200 mb-6">
              Nurturing Minds, Building Futures
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-white hover:text-primary-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className="text-secondary-200 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-300 mt-1 flex-shrink-0" />
                <span className="text-secondary-200">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-300 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-secondary-200 hover:text-primary-300 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-300 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-secondary-200 hover:text-primary-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 pt-6 text-center text-secondary-300">
          <p>&copy; {currentYear} EduSite Basic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;