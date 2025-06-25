import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialSection from '../components/home/TestimonialSection';
import GalleryPreview from '../components/home/GalleryPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <FeaturesSection />
      <GalleryPreview />
      <TestimonialSection />
      <CallToAction />
    </PageLayout>
  );
};

export default HomePage;