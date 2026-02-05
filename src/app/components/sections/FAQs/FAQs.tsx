import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const faqItems = [
  {
    question: 'Kako tačno funkcioniše Magic Mirror?',
    answer: 'Magic Mirror koristi kombinaciju touch screen ekrana, senzora pokreta i AI tehnologije. Gost se postavi ispred ogledala, pokret ruke ili govori komande, a sistem snima video, nanosi efekte i odmah štampa ili šalje fotografiju. Ceo proces traje 2-3 sekunde po fotografiju.',
  },
  {
    question: 'Za koje događaje je Magic Mirror idealan?',
    answer: 'Perfektan je za svadbe, rođendane, korporativne proslave, konferencije, izložbe, lansiranja proizvoda i bilo koju zabavu gde želiš da posle ostanu uspomene. Gosti od 5 do 95 godina uživaju u iskustvu.',
  },
  {
    question: 'Koliko prostora je potrebno za postavljanje?',
    answer: 'Idealno je 3x3 m, ali može funkcionisati i na manjim površinama (2x2.5m). Potrebno nam je električna priključnica i beli zid ili pozadina za najbolje rezultate.',
  },
  {
    question: 'Mogu li prilagoditi šablone i dizajn fotografija?',
    answer: 'Apsolutno! Prilagođavamo sve - logo tvog brenda, boje, animacije, tekst i filtere. Fotografije mogu biti u temi tvojeg događaja (npr. neon, klasika, zabavne maske).',
  },
  {
    question: 'Da li dolazi operator sa Magic Mirror-om?',
    answer: 'Da! Naš profesionalni operator je tu celo vreme. Pomaže gostima, brine o logistici, štampa fotografije i omogućava digitalnu distribuaciju putem QR kodova, e-maila ili Whatsapp-a.',
  },
  
];

export default function FAQs() {
  const { scrollToSection } = useScrollToSection();

  return (
    <Box
      component="section"
      id="faq"
      aria-label="Često postavljana pitanja"
      sx={{
        bgcolor: 'transparent',
        background: 'linear-gradient(180deg, rgba(26, 10, 46, 0.5) 0%, rgba(10, 0, 21, 0.5) 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <SectionHeader 
          title="Česta pitanja" 
          subtitle="Sve što trebaš da znaš o Magic Mirror-u. Ako imaš dodatna pitanja, slobodno nas kontaktiraj!"
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
          }}
        >
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: 'rgba(26, 10, 46, 0.6)',
                border: '1px solid rgba(255, 0, 170, 0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                
                '&:hover': {
                  borderColor: 'rgba(255, 0, 170, 0.6)',
                  boxShadow: '0 0 20px rgba(255, 0, 170, 0.2)',
                },
                
                '&.Mui-expanded': {
                  borderColor: 'rgba(255, 0, 170, 0.8)',
                  boxShadow: '0 0 20px rgba(255, 0, 170, 0.3)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FF00AA', fontSize: 28 }} />}
                sx={{
                  py: 2,
                  
                  '&:hover': {
                    bgcolor: 'rgba(255, 0, 170, 0.05)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    color: 'white',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                <Typography
                  sx={{
                    color: '#C0C0C0',
                    lineHeight: 1.9,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="body1"
            sx={{
              color: '#C0C0C0',
              mb: 3,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            Izostavili smo nešto? Naš tim je spreman da odgovori na sva tvoja pitanja! 🎭
          </Typography>

          <CustomButton 
            onClick={() => scrollToSection('contact')}
            sx={{ px: { xs: 3, md: 5 }, py: { xs: 1.5, md: 2 } }}
          >
            Kontaktiraj Nas
          </CustomButton>
        </Box>
      </Container>
      </Box>
    );
}
