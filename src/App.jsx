import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from './components/common/Loader.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AppRoutes />
      <AnimatePresence>{isLoading && <Loader key="loader" />}</AnimatePresence>
    </>
  );
}
