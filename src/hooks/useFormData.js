import { useState } from 'react';

export const useFormData = (initialData = {}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMaskedChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return {
    formData,
    handleChange,
    handleMaskedChange,
  };
}; 