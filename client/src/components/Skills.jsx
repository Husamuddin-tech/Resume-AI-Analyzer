import React from 'react';

const Skills = ({ skills }) => {
  const [hovered, setHovered] = React.useState(false);

  if (!skills) return null;

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
    width: '100%',
    maxWidth: '700px',
    margin: '1rem auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#6a0dad',
    marginBottom: '1rem',
    fontWeight: '700',
    fontSize: '1.5rem',
  };

  const sectionStyle = {
    marginBottom: '1rem',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 style={titleStyle}>🛠️ Skills</h3>

      <div style={sectionStyle}>
        <strong>Technical Skills:</strong>
        <p>{skills.technicalSkills?.length ? skills.technicalSkills.join(', ') : 'N/A'}</p>
      </div>

      <div style={sectionStyle}>
        <strong>Soft Skills:</strong>
        <p>{skills.softSkills?.length ? skills.softSkills.join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
};

export default Skills;
