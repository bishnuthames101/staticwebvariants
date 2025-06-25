import React, { useState } from 'react';
// Corrected import paths to use the configured path alias
import PageLayout from '@/components/layout/PageLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { galleryImages } from '@/data/siteData';
import { Camera, Share2, MapPin } from 'lucide-react'; // New icons for this variant

// Reusable Image Card for Variant 3
interface GalleryCardVariant3Props {
  image: {
    id: number;
    src: string;
    alt: string;
    category: string;
  };
  onClick: (image: { src: string; alt: string }) => void;
}

const GalleryCardVariant3: React.FC<GalleryCardVariant3Props> = ({ image, onClick }) => (
  <div 
    className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
    onClick={() => onClick(image)}
  >
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-[3/2]"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
      <p className="text-primary-200 text-sm">{image.category}</p>
    </div>
    <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
      <Camera size={20} />
    </div>
  </div>
);


const GalleryPageVariant3: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);

  // Get unique categories and ensure 'All' is always first
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: { src: string; alt: string }) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <PageLayout>
      {/* Hero Section - Immersive video or large image with strong headline */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
        {/* Using an image as a video placeholder for broader compatibility */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/5965997/pexels-photo-5965997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-4 animate-fade-in drop-shadow-lg">
            Our World in Focus
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 mb-8 animate-slide-up">
            A visual journey through the moments that define our school's spirit and community.
          </p>
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl"
          >
            Visit Our Campus
          </Button>
        </div>
      </section>

      {/* Category Tabs & Gallery Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Collections"
            subtitle="Filter through different aspects of school life."
            center
          />
          
          {/* Category Tabs - Scrollable on mobile, centered on desktop */}
          <div className="flex flex-wrap justify-center md:justify-center overflow-x-auto pb-4 -mx-4 px-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-2 mx-1 rounded-full text-base font-medium transition-colors border-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : 'bg-white text-secondary-700 border-secondary-200 hover:bg-secondary-100 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Image Grid with varied sizes (simulate using a flex wrap with controlled widths or responsive grid) */}
          <div className="flex flex-wrap -mx-3">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                // Using dynamic width classes for varied layout. Adjust as needed.
                className={`w-full sm:w-1/2 lg:w-1/3 p-3 animate-fade-in ${image.id % 3 === 0 ? 'lg:w-2/3' : ''}`}
                style={{ animationDelay: `${(image.id % 8) * 0.07}s` }}
              >
                <GalleryCardVariant3 image={image} onClick={openLightbox} />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-10 text-secondary-600 text-xl">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Component */}
      {lightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center justify-center">
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-xl mt-4 font-medium">{currentImage.alt}</p>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Share & Connect Section */}
      <section className="py-20 bg-primary-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Share the Spirit of EduSite
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Love what you see? Share our gallery or connect with us on social media!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="#" // Placeholder for actual share link
              variant="secondary"
              size="lg"
              className="bg-accent-400 text-secondary-900 hover:bg-accent-300 shadow-xl"
              icon={<Share2 size={20} />}
            >
              Share Gallery
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20 focus:ring-white"
              icon={<MapPin size={20} />}
            >
              Find Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GalleryPageVariant3;
