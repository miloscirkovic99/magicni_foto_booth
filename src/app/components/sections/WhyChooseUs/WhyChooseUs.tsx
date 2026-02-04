import { Box, Typography, Container, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import BuildIcon from '@mui/icons-material/Build';
import GlowCard from '../../ui/GlowCard/GlowCard';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const features = [
  {
    icon: <PeopleIcon sx={{ fontSize: 50, color: '#FF00AA' }} />,
    title: 'Nezaboravno Iskustvo',
    description: 'Interaktivno ogledalo u punoj dužini sa animacijama, zvukovima i efektima koji oduševljavaju sve uzraste.',
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 50, color: '#FF00AA' }} />,
    title: 'Kompletan Brend Pregled',
    description: 'Prilagođeni šabloni, logoi, boje i animacije – vaš brend sjaje na svakoj fotografiji.',
  },
  {
    icon: <PhotoCameraIcon sx={{ fontSize: 50, color: '#FF00AA' }} />,
    title: 'Instant Deljenje',
    description: 'Fotografije za 2 sekunde + QR kod za e-mail, Whatsapp i društvene mreže.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 50, color: '#FF00AA' }} />,
    title: 'Potporna Podrška',
    description: 'Naš tim je sa vama od početka do kraja – postavljanje, obuka i pun support tokom događaja.',
  },
];

export default function WhyChooseUs() {
  const { scrollToSection } = useScrollToSection();

  return (
    <Box
      component="section"
      id="why"
      aria-label="Zašto odabrati Magic Mirror - Naše usluge"
      sx={{
        bgcolor: 'transparent',
        background: 'linear-gradient(180deg, rgba(10, 0, 21, 0.5) 0%, rgba(26, 10, 46, 0.5) 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(198, 28, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Zašto Izabrati Magic Mirror?"
          subtitle="Kombinacija tehnologije, zabave i profesionalizma koja čini svaki događaj specijalnim. Naši gosti kažu da je ovo najbolji deo njihove zabave."
        />

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}>
              <GlowCard>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', p: { xs: 2, md: 3 } }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      mb: 1.5,
                      color: 'white',
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B0B0B0',
                      lineHeight: 1.6,
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </GlowCard>
            </Grid>
          ))}
        </Grid>

        <CustomButton
          onClick={() => scrollToSection('contact')}
          sx={{ px: { xs: 3, md: 5 }, py: { xs: 1.5, md: 2 } }}
        >
          Rezerviši Za Tvoj Događaj
        </CustomButton>
      </Container>
      </Box>
    );
  }
