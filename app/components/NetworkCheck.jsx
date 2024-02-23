import React, { useState, useEffect } from 'react';

const NetworkCheck = ({isOnline,setIsOnline}) => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  console.log(isOnline);

  return (
    <div>
      {isOnline ? (
        <p>Online</p>
      ) : (
        <p style={{ color: 'red' }}>Offline</p>
      )}
    </div>
  );
};

export default NetworkCheck;