const validatejobform = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteLanguage) {
        errors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!values.experience) {
        errors.experience = 'Years of Experience is required';
      } else if (values.experience <= 0) {
        errors.experience = 'Years of Experience must be greater than 0';
      }
    }
  
    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    if (values.surveyTopic === 'Education') {
      if (!values.qualification) {
        errors.qualification = 'Highest Qualification is required';
      }
      if (!values.fieldOfStudy) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    if (!values.feedback) {
      errors.feedback = 'Feedback is required';
    } else if (values.feedback.length < 50) {
      errors.feedback = 'Feedback must be at least 50 characters';
    }
  
    return errors;
  };
  
  export default validatejobform;
  