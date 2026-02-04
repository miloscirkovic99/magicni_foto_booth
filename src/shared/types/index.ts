// src/types/index.ts
export interface Booth {
    title: string;
    description: string;
    image: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
  }
  
  export interface EventType {
    title: string;
    image: string;
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    rating: number;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface CustomFormData {
    name: string;
    email: string;
    message: string;
  }