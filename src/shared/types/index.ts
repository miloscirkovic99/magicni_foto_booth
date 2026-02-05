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
    phone: string;
    email: string;
    eventType: string;
    message: string;
  }
  
  export interface ContactApiResponse {
    success: boolean;
    message: string;
    data?: CustomFormData;
  }
  
  export interface ContactApiError {
    message: string;
    field?: string;
  }