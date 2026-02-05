import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import GlowCard from '../../ui/GlowCard/GlowCard';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import styles from './Pricing.module.scss';

const pricingTiers = [
  {
    duration: '1 sat',
    price: '100€',
    guests: 'do 50 gostiju',
    recommended: false,
    features: [
      'Odabir okvira i kolaža (1,2,3,4 fotografije)',
      'Neograničen broj fotografija',
      'Rekviziti u ponudi',
      'Neprekidna podrška tokom događaja',
    ],
  },
  {
    duration: '2 sata',
    price: '180€',
    guests: 'do 100 gostiju',
    recommended: true,
    features: [
      'Odabir okvira i kolaža (1,2,3,4 fotografije)',
      'Neograničen broj fotografija',
      'Rekviziti u ponudi',
      'Neprekidna podrška tokom događaja',
    ],
  },
  {
    duration: '3 sata',
    price: '260€',
    guests: 'preko 100 gostiju',
    recommended: false,
    features: [
      'Odabir okvira i kolaža (1,2,3,4 fotografije)',
      'Neograničen broj fotografija',
      'Rekviziti u ponudi',
      'Neprekidna podrška tokom događaja',
    ],
  },
];

export default function Pricing() {
  const { scrollToSection } = useScrollToSection();

  return (
    <Box
      component="section"
      id="pricing"
      aria-label="Cene magic mirror paketima"
      sx={{
        bgcolor: 'transparent',
        background: 'linear-gradient(180deg, rgba(10, 0, 21, 0.5) 0%, rgba(26, 10, 46, 0.5) 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
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
          title="Cene magic mirror"
          subtitle="Fleksibilni paketi prilagođeni svakom događaju i broju gostiju"
        />

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {pricingTiers.map((tier, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}>
              <GlowCard sx={{ 
                height: '100%',
                position: 'relative',
                border: tier.recommended ? '2px solid #FF00AA' : '1px solid rgba(255, 0, 170, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: tier.recommended ? 'translateY(-15px)' : 'translateY(-8px)',
                  boxShadow: tier.recommended 
                    ? '0 0 40px rgba(255,0,170,0.5)' 
                    : '0 0 25px rgba(255,0,170,0.35)',
                }
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: { xs: 2.5, md: 3.5 } }}>
              

                  {/* Duration and Guest Count */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: 'white',
                      mb: 0.5,
                      mt: tier.recommended ? 1.5 : 0,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    {tier.duration}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#B0B0B0',
                      fontSize: '0.9rem',
                      mb: 2,
                    }}
                  >
                    {tier.guests}
                  </Typography>

                  {/* Price */}
                  <Typography
                    sx={{
                      fontSize: { xs: '2.5rem', md: '2.8rem' },
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #FF00AA 0%, #C61CFF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: 3,
                    }}
                  >
                    {tier.price}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ flex: 1, mb: 3 }}>
                    {tier.features.map((feature, fIndex) => (
                      <Box
                        key={fIndex}
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          mb: 1.5,
                          alignItems: 'flex-start',
                        }}
                      >
                        <CheckIcon
                          sx={{
                            color: '#FF00AA',
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            mt: 0.3,
                          }}
                        />
                        <Typography
                          sx={{
                            color: '#D0D0D0',
                            fontSize: '0.95rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Button */}
                  <CustomButton
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      width: '100%',
                      py: 1.2,
                      fontSize: '0.95rem',
                      fontWeight: 700,
                    }}
                  >
                    Rezerviši sada
                  </CustomButton>
                </Box>
              </GlowCard>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            background: 'rgba(255, 0, 170, 0.08)',
            border: '1px solid rgba(255, 0, 170, 0.2)',
            borderRadius: '8px',
            p: { xs: 2.5, md: 4 },
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              mb: 1,
            }}
          >
            📌 Dodatne informacije
          </Typography>
          <Typography
            sx={{
              color: '#D0D0D0',
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.8,
            }}
          >
            Svaki započeti dodatni sat - <span style={{ color: '#FF00AA', fontWeight: 700 }}>70€</span>
            <br />
            <br />
            Izaberite svoj okvir i stil kolaža. Za najbolje rezultate preporučujemo 1–2 fotografije.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <CustomButton
            onClick={() => scrollToSection('contact')}
            sx={{ px: { xs: 3, md: 5 }, py: { xs: 1.5, md: 2 } }}
          >
            Saznajte više i rezervirajte svoj događaj
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
}
