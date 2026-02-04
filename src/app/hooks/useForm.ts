// src/hooks/useForm.ts
import { useState, ChangeEvent, FormEvent } from 'react';
import { CustomFormData } from 'src/shared/types';

interface UseFormReturn {
  formData: CustomFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  resetForm: () => void;
}

const useForm = (initialState: CustomFormData, onSubmit: (data: CustomFormData) => void): UseFormReturn => {
  const [formData, setFormData] = useState<CustomFormData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, handleSubmit, resetForm };
};

export default useForm;