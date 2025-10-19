export interface IFreelancingProfile {
  _id?: string;
  serviceName: string;
  description: string;
  category: string;
  subcategory: string;
  gigImage: string;
  platformLogo?: string;
  fiverr_link?: string;
  upwork_link?: string;
  serviceType: 'hourly' | 'fixed' | 'both';
  deliveryTime: number; // in days
  revisions: number;
  packages: {
    basic: {
      name: string;
      description: string;
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
    standard?: {
      name: string;
      description: string;
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
    premium?: {
      name: string;
      description: string;
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  requirements: string[];
  isActive: boolean;
  featured: boolean;
  totalOrders: number;
  rating: number;
  reviews: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFreelancingProfileFilters {
  category?: string;
  subcategory?: string;
  deliveryTime?: number;
  rating?: number;
  serviceType?: 'hourly' | 'fixed' | 'both';
  search?: string;
}
