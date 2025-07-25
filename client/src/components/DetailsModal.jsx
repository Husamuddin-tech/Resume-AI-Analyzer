import React from 'react';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import AIFeedback from './AIFeedback';
import './DetailsModal.css'; // We will create this CSS file next

const DetailsModal = ({ analysisData, onClose }) => {
  if (!analysisData) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2>Analysis Details</h2>
        <div className="results-grid">
          <PersonalDetails className="card" details={analysisData.personalDetails} />
          <Skills className="card" skills={analysisData.skills} />
          <AIFeedback className="card" feedback={analysisData.aiFeedback} />
          {/* Add other components for experience, education etc. if you created them */}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;