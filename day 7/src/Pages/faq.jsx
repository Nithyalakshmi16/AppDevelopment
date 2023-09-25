import React, { useState } from 'react';
import '../assets/Style.css';

function FAQ() {
  // Define state to manage the user's question input
  const [question, setQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  
  // Sample questions
  const sampleQuestions = [
    'How can I reset my password?',
    'What are the supported payment methods?',
    'Is there a mobile app available?',
    'How do I contact customer support?',
    'how to apply insurance ?'
  ];

  // Function to handle question submission
  const handleSubmit = () => {
    if (question.trim() !== '') {
      // Add the question to the submitted questions list
      setSubmittedQuestions([...submittedQuestions, question]);

      // Clear the input field
      setQuestion('');
    }
  };

  // Function to go back to the previous page
  const handleCancel = () => {
    window.history.back(); // Use the browser's history to navigate back
  };

  return (
    <div className="centered-container">
      <div className='container_all'>
        <h1>Frequently Asked Questions</h1>
        <label htmlFor="username" className="custom-label">Username</label>

        {/* Question input */}
        <div>
          <input
            type="text"
            placeholder="Ask your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {/* Updated class name for the button */}
          <button className="new-custom-button" onClick={handleSubmit}>
            Submit
          </button>
          {/* "Cancel" button */}
          <button className="new-customs-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {/* Display sample and submitted questions */}
        <div>
          <h2>Sample Questions:</h2>
          <ul>
            {sampleQuestions.map((sampleQuestion, index) => (
              <li key={index}>{sampleQuestion}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Submitted Questions:</h2>
          <ul>
            {submittedQuestions.map((submittedQuestion, index) => (
              <li key={index}>{submittedQuestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
