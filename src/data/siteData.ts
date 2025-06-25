import { Testimonial, GalleryImage, NavLink, ContactInfo } from '../types';

export const navLinks: NavLink[] = [
  { 
    name: 'Home', 
    path: '/',
    variants: [
      
      { name: 'Home Variant 2', path: '/home/variant2' },
      { name: 'Home Variant 3', path: '/home/variant3' },
    ],
  },
  {
    name: 'Admissions',
    path: '/admissions',
    variants: [
      
      { name: 'Admissions Variant 2', path: '/admissions/variant2' },
      { name: 'Admissions Variant 3', path: '/admissions/variant3' },
    ],
  },
  {
    name: 'Gallery',
    path: '/gallery',
    variants: [
      { name: 'Gallery Variant 2', path: '/gallery/variant2' },
      { name: 'Gallery Variant 3', path: '/gallery/variant3' },
    ],
  },
  { 
    name: 'About', 
    path: '/about',
    variants: [
      
      { name: 'About Variant 2', path: '/about/variant2' },
      { name: 'About Variant 3', path: '/about/variant3' },
    ],
  },
  
  {
    name: 'Testimonials',
    path: '/testimonials',
    variants: [
      { name: 'Testimonials Variant 2', path: '/testimonials/variant2' },
      { name: 'Testimonials Variant 3', path: '/testimonials/variant3' },
    ],
  },
  
  { name: 'Contact', path: '/contact' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Principal',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'Our mission is to provide quality education that nurtures creative thinking and prepares students for future challenges. We focus on holistic development that balances academics with extracurricular activities.',
  },
  {
    id: 2,
    name: 'Anita Thapa',
    role: 'Parent',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'The teachers are incredibly supportive and communicate regularly with parents. My child has shown tremendous improvement in both academics and confidence since joining this school.',
  },
  {
    id: 3,
    name: 'Bikash Poudel',
    role: 'Alumni',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'The values and education I received at this school laid a strong foundation for my career. I still cherish the memories and lessons learned during my time here.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/8617857/pexels-photo-8617857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Students in a classroom',
    category: 'Academics',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'School building',
    category: 'Campus',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/8423102/pexels-photo-8423102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cultural program',
    category: 'Events',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'School playground',
    category: 'Sports',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/159844/book-reading-old-books-pages-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'School library',
    category: 'Facilities',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Computer lab',
    category: 'Facilities',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Science experiment',
    category: 'Academics',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Students taking notes',
    category: 'Academics',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'School trip',
    category: 'Events',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Lakeside Road, Pokhara, Nepal',
  phone: '+977 61-123456',
  email: 'info@edusitebasic.edu.np',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8580674603427!2d83.95626281501644!3d28.209958982583536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0c1dfb%3A0xdce3e7fbd1154174!2sLakeside%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1654609272407!5m2!1sen!2snp',
};

export const schoolInfo = {
  name: 'EduSite Basic School',
  slogan: 'Nurturing Minds, Building Futures',
  established: '2005',
  principalMessage: 'Welcome to EduSite Basic School. Our goal is to provide quality education in a nurturing environment that helps students discover their potential and grow into responsible citizens. We believe in holistic development that balances academics with character building and practical skills.',
  mission: 'To provide quality education that nurtures creative thinking and prepares students for future challenges, while instilling values of respect, integrity, and social responsibility.',
  vision: 'To be a leading educational institution that empowers students to excel academically and grow personally, becoming confident individuals ready to contribute positively to society.',
  values: [
    'Excellence in education',
    'Respect for diversity',
    'Integrity in actions',
    'Innovation in teaching',
    'Community engagement'
  ],
  achievements: [
    'District-level Academic Excellence Award (2022)',
    'National-level Science Project Competition Winners (2021)',
    'Best School Infrastructure Award (2020)',
    'Cultural Heritage Preservation Recognition (2019)'
  ],
  admissionInfo: {
    enrollmentPeriod: 'January 15 - March 15 annually',
    grades: 'Pre-primary to Grade 10',
    requirements: [
      'Birth certificate',
      'Previous academic records (for transfers)',
      'Passport-sized photographs',
      'Parent/guardian identification',
      'Completed application form'
    ],
    process: 'Applications can be submitted online or in-person at our administrative office. After document verification, students may be required to take a placement assessment, followed by an interview with parents/guardians.',
    downloadUrl: '#' // This would point to a PDF in production
  }
};