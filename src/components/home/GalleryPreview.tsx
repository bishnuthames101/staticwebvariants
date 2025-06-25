import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { galleryImages } from '../../data/siteData';

const GalleryPreview: React.FC = () => {
  // Only show the first 6 images for the preview
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="School Gallery"
          subtitle="Take a glimpse into our vibrant school life and activities"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg aspect-[4/3] group animate-fade-in"
              style={{ animationDelay: `${image.id * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            to="/gallery" 
            icon={<ArrowRight size={18} />}
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;