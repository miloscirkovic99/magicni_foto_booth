import { useState, useCallback } from 'react';
import { CustomFormData, ContactApiResponse, ContactApiError } from 'src/shared/types';
import { contactService } from '../../shared/api/contactService';

interface UseContactFormReturn {
  isLoading: boolean;
  error: ContactApiError | null;
  success: boolean;
  submitForm: (data: CustomFormData) => Promise<boolean>;
  resetState: () => void;
}

const useContactFormSubmit = (): UseContactFormReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ContactApiError | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = useCallback(async (data: CustomFormData): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const response: ContactApiResponse = await contactService.submitContactForm(data);

      if (response.message ==='Uspešno poslat email') {
        setSuccess(true);
        return true;
      }
      return false;
    } catch (err) {
      const apiError = err as ContactApiError;
      setError(apiError);
      console.error('Form submission error:', apiError);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetState = useCallback(() => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    success,
    submitForm,
    resetState,
  };
};

export default useContactFormSubmit;
