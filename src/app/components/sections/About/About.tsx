import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

export default function About() {
  const { scrollToSection } = useScrollToSection();

  return (
    <Box
      component="section"
      id="about"
      aria-label="O Magic Mirror - Revolucija interaktivne fotografije"
      sx={{
        position: 'relative',
        color: 'white',
        py: { xs: 8, md: 12 },
        backgroundImage: `url('/About.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        minHeight: { xs: '600px', md: '80vh' },
        
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(10, 0, 21, 0.75)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ minHeight: '100%' }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#FF00AA',
                mb: 2,
                fontSize: '0.9rem',
              }}
            >
              Šta Je Magic Mirror?
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FF00AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Revolucija Interaktivne Fotografije
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: '#E0E0E0', lineHeight: 1.9 }}>
              Magic Mirror je više od običnog ogledala – to je kapsula iskustva koja kombinuje najnoviju tehnologiju sa zabavom. Naš napredni sistem sa ekranom osetljivim na dodir, senzorima pokreta i AI tehnologijom kreira instant foto iskustva koja vaši gosti neće moći zaboraviti.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: '#E0E0E0', lineHeight: 1.9 }}>
              Od neonskih efekata do prilagođenih šablona – svaka fotografija postaje deo vašeg jedinstvenog brenda. Gosti se odmah šale, poziraju i dele, stvarajući organsku promociju na društvenim mrežama.
            </Typography>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outlined"
              sx={{
                borderColor: '#FF00AA',
                color: '#FF00AA',
                borderWidth: '2px',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                transition: 'all 0.3s',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#FF00AA',
                  color: '#FFFFFF',
                  boxShadow: '0 0 20px rgba(255, 0, 170, 0.6)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Rezerviši Sada
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
