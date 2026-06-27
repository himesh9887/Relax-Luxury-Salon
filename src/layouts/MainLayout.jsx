import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import ScrollToTop from '../components/common/ScrollToTop.jsx';

const whatsappLink = 'https://wa.me/919887442586';

export default function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gold" style={{ scaleX, width: '100%' }} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:-translate-y-1 sm:right-6"
        href={whatsappLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaWhatsapp size={25} />
      </a>
      <ScrollToTop />
    </>
  );
}
