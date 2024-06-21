import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
      setValues({ ...values, submitted: true });
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, callback, values]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? [...(values[name] || []), value] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default useForm;
