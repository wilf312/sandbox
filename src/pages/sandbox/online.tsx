import { useEffect, useState } from 'react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const networkHandler = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener('online', networkHandler);
    window.addEventListener('offline', networkHandler);

    return () => {
      window.removeEventListener('online', networkHandler);
      window.removeEventListener('offline', networkHandler);
    };
  });
  return <div>isOnline: {isOnline.toString()}</div>;
};

export default function App() {
  return <NetworkStatus />;
}
