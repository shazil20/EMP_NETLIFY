import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/6662ed5c981b6c56477a8b1e/1hvp6ucpa';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append script to body
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI component, just for side effects
};

export default TawkTo;
