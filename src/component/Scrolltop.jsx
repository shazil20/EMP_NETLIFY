import { Widgets } from '@material-ui/icons';
import React from 'react';

function Scrolltop() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} style={styles}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

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
  right: '100px' 
};

export default Scrolltop;
