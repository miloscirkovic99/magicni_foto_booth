import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const events = [
  {
    title: 'Ceremonija venčanja',
    image: '/weeding.png',
    description: 'Neon ogledalo čini ceremoniju nezaboravnom',
  },
  {
    title: 'Rođendanske žurke',
    image: '/birthday.png',
    description: 'Zabava koja ostavlja bez daha — interaktivno iskustvo koje svi pamte',
  },
  {
    title: 'Korporativni događaji',
    image: '/corporate.png',
    description: 'Brendirajte svoju kompaniju kroz zabavnu aktivnost',
  },
 
];

export default function EventTypes() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section id="events" aria-label="Tipovi događaja - Savršeno za svaku priliku">
      <Box sx={{ color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <SectionHeader 
            title="Savršeno za svaku priliku"
            subtitle="Bilo koja vrsta događaja postaje nezaboravna sa Magic Mirror-om. Od intimnih skupova do velikih proslava, mi imamo rešenje za tebe."
            headingLevel="h2"
          />

        <Grid container spacing={{ xs: 1, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }} justifyContent={'center'}>
          {events.map((event, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}>
              <Card
                sx={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px',
                  height: '320px',
                  position: 'relative',
                  border: '2px solid #FF00AA40',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  
                  '&:hover': {
                    borderColor: '#FF00AA',
                    boxShadow: '0 0 30px #FF00AA50, inset 0 0 30px #FF00AA15',
                    transform: 'translateY(-4px)',
                    
                    '& .overlay': {
                      backdropFilter: 'blur(0px)',
                      background: 'rgba(0, 0, 0, 0.4)',
                    },
                    
                    '& h6': {
                      transform: 'translateY(0)',
                      opacity: 1,
                    },

                    '& .eventDescription': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderRadius: '16px',
                    transition: 'all 0.3s',
                    p: 3,
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 800,
                        textAlign: 'center',
                        transition: 'all 0.3s',
                        transform: 'translateY(10px)',
                        opacity: 0.95,
                        mb: 1,
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      className="eventDescription"
                      variant="caption"
                      sx={{
                        color: '#D0D0D0',
                        opacity: 0,
                        transform: 'translateY(10px)',
                        transition: 'all 0.3s',
                        display: 'block',
                        lineHeight: 1.4,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <CustomButton 
          onClick={() => scrollToSection('contact')}
          sx={{ px: { xs: 3, md: 5 }, py: { xs: 1.5, md: 2 } }}
        >
          Zakaži svoj događaj
        </CustomButton>
      </Container>
      </Box>
    </section>
  );
}
