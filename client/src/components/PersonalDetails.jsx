import React from 'react';

const PersonalDetails = ({ details }) => {
  const [hovered, setHovered] = React.useState(false);

  if (!details) return null;

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

  const linkStyle = {
    color: '#6a0dad',
    textDecoration: 'none',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 style={titleStyle}>👤 Personal Details</h3>
      <p><strong>Name:</strong> {details.name || 'N/A'}</p>
      <p><strong>Email:</strong> {details.email || 'N/A'}</p>
      <p><strong>Phone:</strong> {details.phone || 'N/A'}</p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        {details.linkedin ? (
          <a
            href={details.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            {details.linkedin}
          </a>
        ) : (
          'N/A'
        )}
      </p>
    </div>
  );
};

export default PersonalDetails;
