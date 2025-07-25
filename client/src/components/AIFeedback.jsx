import React, { useState } from 'react';

const AIFeedback = ({ feedback }) => {
  const [hovered, setHovered] = useState(false);

  if (!feedback) return null;

  const cardStyle = {
    background: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: hovered
      ? '0 8px 20px rgba(128, 0, 128, 0.3)'
      : '0 2px 6px rgba(0, 0, 0, 0.1)',
    transform: hovered ? 'translateY(-8px)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    width: '100%', // assuming full-width as in your class "full-width"
  };

  return (
    <div
      className="card full-width ai-feedback"
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="feedback-title">🤖 AI Feedback</h3>

      <p className="feedback-rating">
        <strong>Overall Rating:</strong> {feedback.rating}/10
      </p>

      <div className="feedback-section">
        <strong>Areas for Improvement:</strong>
        <p>{feedback.improvementAreas}</p>
      </div>

      <div className="feedback-section">
        <strong>Upskilling Suggestions:</strong>
        <ul>
          {feedback.upskillingSuggestions?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIFeedback;
