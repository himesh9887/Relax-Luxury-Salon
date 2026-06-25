import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Gallery from '../pages/Gallery.jsx';
import Team from '../pages/Team.jsx';
import Pricing from '../pages/Pricing.jsx';
import Appointment from '../pages/Appointment.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import Contact from '../pages/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="team" element={<Team />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
