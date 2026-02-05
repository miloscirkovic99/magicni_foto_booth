import axios, { AxiosInstance, AxiosError } from 'axios';
import { CustomFormData, ContactApiResponse, ContactApiError } from '../types';

class ContactService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }

  async submitContactForm(formData: CustomFormData): Promise<ContactApiResponse> {
    try {
      const response = await this.axiosInstance.post<ContactApiResponse>(
        '/email',
        formData
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ContactApiError>;
      throw {
        message:
          axiosError.response?.data?.message ||
          axiosError.message ||
          'An error occurred while submitting the form',
        field: axiosError.response?.data?.field,
      } as ContactApiError;
    }
  }
}

export const contactService = new ContactService();
