import { Box, Container } from '@mui/material';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import styles from './Hero.module.scss';

export default function Hero() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section id="hero" className={styles.hero_container}>
      <Box
        component="div"
        role="region"
        aria-label="Magic Mirror - interaktivna fotografija za događaje"
        sx={{
          textAlign: 'center',
          py: { xs: 8, sm: 12, md: 14 },
          minHeight: { xs: '600px', md: '700px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(198, 28, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 170, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ animation: 'fadeInDown 0.8s ease-out' }} component="header">
            <SectionHeader 
              title="NAPRAVI SVAKI KLIK MAGIČNIM." 
              subtitle="Transformišite vašu zabavu u nezaboravno iskustvo sa najnaprednijom interaktivnom fotografijom. Magic Mirror čini svaki trenutak vrednim memorisanja."
            />
            
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 2, md: 3 },
                mt: { xs: 4, md: 6 },
                animation: 'fadeInUp 1s ease-out 0.2s backwards',
              }}
            >
              <CustomButton
                onClick={() => scrollToSection('contact')}
                aria-label="Zakaži Magic Mirror sada"
                sx={{
                  px: { xs: 3, md: 5 },
                  py: { xs: 1.5, md: 2 },
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '100%', sm: '280px' },
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                Zakaži sada
              </CustomButton>

              <CustomButton
                variant="outlined"
                onClick={() => scrollToSection('why')}
                aria-label="Saznaj više o Magic Mirror uslugama"
                sx={{
                  px: { xs: 3, md: 5 },
                  py: { xs: 1.5, md: 2 },
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '100%', sm: '280px' },
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                Saznaj više
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
}