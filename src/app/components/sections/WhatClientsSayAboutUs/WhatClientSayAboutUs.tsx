import { useState } from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';

const testimonials = [
  {
    quote:
      'Magično ogledalo je bilo vrhunac naše svadbe! Gosti nisu mogli prestati da fotografišu. Izgledale su elegantno i dodalo je tako zabavan vibe!',
    name: 'Jovana ',
    position: 'Venčanje - Niš',
  },
  {
    quote:
      'Fantastična iskustva za sve naše goste! Profesionalni tim, odličan opseg i fotografije koje su šta da vidim su zaista divne. Svakako ćemo preporučiti!',
    name: 'Marko',
    position: 'Organizator - Korporativni događaj',
  },
  {
    quote:
      'Osvojio je sve mene i moje društvo! Magic Mirror je bio apsolutno glavni hit na našoj zabavi. Hvala vam na još jednom neverovatnom doživljaju!',
    name: 'Milena',
    position: 'Organizatorka - Rođendanska zabava',
  },
  {
    quote:
      'Izvanredan servis i profesionalni pristup! Magic Mirror je zaista učinio razliku na našem događaju. Gosti su bili fascianirani!',
    name: 'Aleksandar',
    position: 'Event Manager - Prestižni sajmovi',
  },
];

export default function WhatClientsSayAboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const items = [];
    const itemsPerView = 2; // Show 2 cards on desktop, 1 on mobile

    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], actualIndex: index });
    }
    return items;
  };

  return (
    <Box
      component="section"
      id="testimonials"
      aria-label="Iskustva klijenata Magic Mirror"
      sx={{
        bgcolor: 'transparent',
        background:
          'linear-gradient(180deg, rgba(10, 0, 21, 0.5) 0%, rgba(26, 10, 46, 0.5) 100%)',
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
          background:
            'radial-gradient(circle, rgba(198, 28, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Iskustva klijenata"
          subtitle="Čitajte šta kažu oni koji su doživeli magiju Magic Mirror-a"
        />

        {/* Testimonials Carousel */}
        <Box sx={{ position: 'relative', mb: { xs: 6, md: 8 } }}>
          {/* Desktop View - 2 Cards */}
          <Box
            sx={{
              display: { xs: 'none', md: 'grid' },
              gridTemplateColumns: '1fr 1fr',
              gap: { md: 3 },
              mb: 4,
            }}
          >
            {getVisibleTestimonials().map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </Box>

          {/* Mobile View - 1 Card */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </Box>

          {/* Carousel Dots */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              mt: 4,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: '8px',
                  borderRadius: '50%',
                  bgcolor:
                    index === currentIndex
                      ? '#FF00AA'
                      : 'rgba(255, 0, 170, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#FF00AA',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    position: string;
    // avatar: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Box
      sx={{
        background: 'rgba(40, 20, 70, 0.6)',
        border: '2px solid',
        borderImage: 'linear-gradient(135deg, #FF00AA 0%, #C61CFF 100%) 1',
        borderRadius: '16px',
        p: { xs: 2.5, md: 3.5 },
        position: 'relative',
        minHeight: { xs: '320px', md: '300px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 0 25px rgba(255,0,150,0.25)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 40px rgba(255,0,150,0.4)',
          transform: 'translateY(-8px)',
        },
      }}
    >
      {/* Quote Text */}
      <Typography
        sx={{
          fontSize: { xs: '0.95rem', md: '1.05rem' },
          lineHeight: 1.7,
          color: '#E0E0E0',
          mb: 3,
          fontStyle: 'italic',
          fontWeight: 500,
        }}
      >
        "{testimonial.quote}"
      </Typography>

      {/* Bottom Section - Profile & Quote Icon */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {/* Profile Info */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          {/* <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
            sx={{
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              border: '2px solid #FF00AA',
              boxShadow: '0 0 15px rgba(255, 0, 170, 0.4)',
              flexShrink: 0,
            }}
          /> */}

          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                color: 'white',
                mb: 0.3,
              }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                color: '#FF00AA',
                fontWeight: 600,
              }}
            >
              {testimonial.position}
            </Typography>
          </Box>
        </Box>

        {/* Quote Icon */}
        <FormatQuoteIcon
          sx={{
            fontSize: { xs: '2.5rem', md: '3rem' },
            color: '#FF00AA',
            opacity: 0.6,
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  );
}
