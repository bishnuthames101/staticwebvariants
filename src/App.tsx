import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomePageVariant2 from './pages/HomePageVariant2';
import HomePageVariant3 from './pages/HomePageVariant3';
import AboutPage from './pages/AboutPage';
import AboutPageVariant2 from './pages/AboutPageVariant2';
import AboutPageVariant3 from './pages/AboutPageVariant3';
import GalleryPage from './pages/GalleryPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AdmissionsPageVariant2 from './pages/AdmissionPageVariant2';
import AdmissionsPageVariant3 from './pages/AdmissionPageVariant3';
import TestimonialsPage from './pages/TestimonialsPage';
import TestimonialsPageVariant2 from './pages/TestimonialsPageVariant2';
import TestimonialsPageVariant3 from './pages/TestimonialsPageVariant3';
import GalleryPageVariant2 from './pages/GallaryPageVariant2';
import GalleryPageVariant3 from './pages/GallaryPageVariant3';
import ContactPage from './pages/ContactPage';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Variant pages */}
        <Route path="/home/variant2" element={<HomePageVariant2 />} />
        <Route path="/home/variant3" element={<HomePageVariant3 />} />

        <Route path="/about/variant2" element={<AboutPageVariant2 />} />
        <Route path="/about/variant3" element={<AboutPageVariant3 />} /> 

        <Route path="/admissions/variant2" element={<AdmissionsPageVariant2 />} />
        <Route path="/admissions/variant3" element={<AdmissionsPageVariant3 />} />

        <Route path="/testimonials/variant2" element={<TestimonialsPageVariant2 />} />
        <Route path="/testimonials/variant3" element={<TestimonialsPageVariant3 />} />
        
        <Route path="/gallery/variant2" element={<GalleryPageVariant2 />} />
        <Route path="/gallery/variant3" element={<GalleryPageVariant3 />} />
       
       
       
       
       
       

        {/* Add more variant routes as you create them */}

        {/* Error page for unmatched routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;