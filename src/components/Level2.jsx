import { useState } from 'react';
import useForm from '../hooks/useForm';
import validate from '../helpers/validate';


export default function JobApplicationForm() {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  function submit() {
    console.log('Form submitted successfully');
    console.log(values);
  }

  return (
    <div className="p-5 border border-gray-400 rounded-xl bg-gray-100 text-black shadow shadow-gray-300 w-[80%] md:w-[30%] max-w-[1000px] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName || ''}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.fullName && 'border-red-500'}`}
          />
          {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={values.phone || ''}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.phone && 'border-red-500'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Applying for Position</label>
          <select
            name="position"
            value={values.position || ''}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.position && 'border-red-500'}`}
          >
            <option value="">Select Position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && <p className="text-red-500 text-xs">{errors.position}</p>}
        </div>

        {(values.position === 'Developer' || values.position === 'Designer') && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Relevant Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={values.experience || ''}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.experience && 'border-red-500'}`}
            />
            {errors.experience && <p className="text-red-500 text-xs">{errors.experience}</p>}
          </div>
        )}

        {values.position === 'Designer' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Portfolio URL</label>
            <input
              type="url"
              name="portfolio"
              value={values.portfolio || ''}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.portfolio && 'border-red-500'}`}
            />
            {errors.portfolio && <p className="text-red-500 text-xs">{errors.portfolio}</p>}
          </div>
        )}

        {values.position === 'Manager' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Management Experience</label>
            <input
              type="text"
              name="managementExperience"
              value={values.managementExperience || ''}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.managementExperience && 'border-red-500'}`}
            />
            {errors.managementExperience && <p className="text-red-500 text-xs">{errors.managementExperience}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Additional Skills</label>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'CSS', 'Python', 'React', 'Node.js'].map((skill) => (
              <div key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>{skill}</label>
              </div>
            ))}
          </div>
          {errors.skills && <p className="text-red-500 text-xs">{errors.skills}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Preferred Interview Time</label>
          <input
            type="datetime-local"
            name="interviewTime"
            value={values.interviewTime || ''}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.interviewTime && 'border-red-500'}`}
          />
          {errors.interviewTime && <p className="text-red-500 text-xs">{errors.interviewTime}</p>}
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>

      {values.submitted && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
