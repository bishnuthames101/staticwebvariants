export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  name: string;
  path: string;
  variants?: { name: string; path: string }[]; // Added this line
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}