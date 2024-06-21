import React, { useEffect, useState } from "react";
import useFormJobApp from "../hooks/useFormJobApp";
import validatejobform from "../helpers/validatejobform";

export default function Level3() {
  const { handleChange, handleSubmit, values, errors } = useFormJobApp(
    submit,
    validatejobform
  );
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (values.surveyTopic) {
      fetchAdditionalQuestions(values.surveyTopic);
    }
  }, [values.surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await fetch(
        `https://api.example.com/questions?topic=${topic}`
      );
      const data = await response.json();
      setAdditionalQuestions(data);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  function submit() {
    console.log("Form submitted successfully");
    console.log(values);
  }

  return (
    <div className="p-5 border border-gray-400 rounded-xl bg-gray-100 text-black shadow shadow-gray-300 w-[80%] md:w-[30%] max-w-[1000px] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Survey Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName || ""}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.fullName && "border-red-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Survey Topic
          </label>
          <select
            name="surveyTopic"
            value={values.surveyTopic || ""}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.surveyTopic && "border-red-500"
            }`}
          >
            <option value="">Select Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && (
            <p className="text-red-500 text-xs">{errors.surveyTopic}</p>
          )}
        </div>

        {values.surveyTopic === "Technology" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Favorite Programming Language
            </label>
            <select
              name="favoriteLanguage"
              value={values.favoriteLanguage || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.favoriteLanguage && "border-red-500"
              }`}
            >
              <option value="">Select Language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            {errors.favoriteLanguage && (
              <p className="text-red-500 text-xs">{errors.favoriteLanguage}</p>
            )}
          </div>
        )}

        {values.surveyTopic === "Technology" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={values.experience || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.experience && "border-red-500"
              }`}
            />
            {errors.experience && (
              <p className="text-red-500 text-xs">{errors.experience}</p>
            )}
          </div>
        )}

        {values.surveyTopic === "Health" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Exercise Frequency
            </label>
            <select
              name="exerciseFrequency"
              value={values.exerciseFrequency || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.exerciseFrequency && "border-red-500"
              }`}
            >
              <option value="">Select Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && (
              <p className="text-red-500 text-xs">{errors.exerciseFrequency}</p>
            )}
          </div>
        )}

        {values.surveyTopic === "Health" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Diet Preference
            </label>
            <select
              name="dietPreference"
              value={values.dietPreference || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.dietPreference && "border-red-500"
              }`}
            >
              <option value="">Select Diet</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && (
              <p className="text-red-500 text-xs">{errors.dietPreference}</p>
            )}
          </div>
        )}

        {values.surveyTopic === "Education" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Highest Qualification
            </label>
            <select
              name="qualification"
              value={values.qualification || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.qualification && "border-red-500"
              }`}
            >
              <option value="">Select Qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.qualification && (
              <p className="text-red-500 text-xs">{errors.qualification}</p>
            )}
          </div>
        )}

        {values.surveyTopic === "Education" && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={values.fieldOfStudy || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.fieldOfStudy && "border-red-500"
              }`}
            />
            {errors.fieldOfStudy && (
              <p className="text-red-500 text-xs">{errors.fieldOfStudy}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Feedback</label>
          <textarea
            name="feedback"
            value={values.feedback || ""}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.feedback && "border-red-500"
            }`}
          />
          {errors.feedback && (
            <p className="text-red-500 text-xs">{errors.feedback}</p>
          )}
        </div>

        {additionalQuestions.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Additional Questions</h2>
            {additionalQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  {question.label}
                </label>
                <input
                  type={question.type}
                  name={`additionalQuestion_${index}`}
                  value={values[`additionalQuestion_${index}`] || ""}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors[`additionalQuestion_${index}`] && "border-red-500"
                  }`}
                />
                {errors[`additionalQuestion_${index}`] && (
                  <p className="text-red-500 text-xs">
                    {errors[`additionalQuestion_${index}`]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
