import { Box } from '@mui/material';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import WhyChooseUs from './components/sections/WhyChooseUs/WhyChooseUs';
import EventTypes from './components/sections/EventTypes/EventTypes';
import InstagramSection from './components/sections/InstagramFeed/InstagramFeed';
import Faq from './components/sections/FAQs/FAQs';
import ContactForm from './components/sections/ContactForm/ContactForm';
import Footer from './components/sections/Footer/Footer';
import { TopNavigation } from './components/ui/Navigation/Navigation';
import styles from './app.module.scss';

export function App() {
  return (
    <Box className={styles.container} sx={{ bgcolor: '#0a0015' }}>
      <TopNavigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <EventTypes />
      <InstagramSection />
      <Faq />
      <ContactForm />
      <Footer />
    </Box>
  );
}

export default App;
