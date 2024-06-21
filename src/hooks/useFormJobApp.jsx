import { useState, useEffect } from 'react';
import React from 'react'


const useFormJobApp = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, callback]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useFormJobApp;
