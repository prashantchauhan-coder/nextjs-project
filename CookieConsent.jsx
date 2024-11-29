import React, { useState } from 'react';
import styles from '@/styles/CookieConsent.module.scss';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className={styles.cookieBanner}>
        <p>
          We use cookies to improve your experience. By using our site, you agree to our{' '}
          <a href="/privacy-policy" target="_blank" >
            Privacy Policy
          </a>
          and
          <a href="/cookie-policy" target="_blank" >
            Cookie Policy
          </a>.
        </p>
        <button onClick={handleAccept} className={styles.acceptButton}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieConsent;
