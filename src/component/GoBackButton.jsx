import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  const styles = {
    background: '#7866FF',
    color: 'white',
    padding: '1.3rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '21px',
    left: '30px'
  };

  return (
    <button onClick={handleGoBack} style={styles}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default GoBackButton;
