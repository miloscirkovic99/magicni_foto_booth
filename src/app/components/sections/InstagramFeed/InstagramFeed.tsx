import { Box, Typography, Grid, Container, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import { useOptimizedImage } from '../../../hooks/useOptimizedImage';

const instagramPosts = [
  'https://images.unsplash.com/photo-1519671482677-504be0271101?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516939884455-1aa7b079b3c2?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519915212116-7cfef71f0d3e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519671482677-504be0271101?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=400&fit=crop',
];

function InstagramImage({ src, index }: { src: string; index: number }) {
  const { imageSrc, imgRef } = useOptimizedImage({ 
    src, 
    alt: `Instagram post ${index + 1}`,
    placeholder: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231a0a2e" width="400" height="400"/%3E%3C/svg%3E'
  });

  return (
    <Box
      ref={imgRef}
      component="img"
      src={imageSrc}
      alt={`Instagram post ${index + 1}`}
      loading="lazy"
      sx={{
        width: '100%',
        height: '250px',
        borderRadius: '12px',
        objectFit: 'cover',
        cursor: 'pointer',
        border: '1px solid rgba(255, 0, 170, 0.2)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        '&:hover': {
          transform: 'scale(1.05) translateY(-4px)',
          boxShadow: '0 0 20px rgba(255, 0, 170, 0.4)',
          borderColor: 'rgba(255, 0, 170, 0.6)',
        },
      }}
    />
  );
}

export default function InstagramSection() {
  return (
    <Box
      component="section"
      id="instagram"
      aria-label="Vidite Magiju na Instagram-u - Naša galerija"
      sx={{
        color: 'white',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(10, 0, 21, 0.5) 0%, rgba(26, 10, 46, 0.5) 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            mb: { xs: 4, md: 6 },
            gap: 2,
            animation: 'fadeInDown 0.8s ease-out',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              href="https://www.instagram.com/magicno_ogledalo_nis_nis/"
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              sx={{
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                borderRadius: '12px',
                p: 1.5,
                transition: 'transform 0.3s',
                
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <InstagramIcon sx={{ color: 'white', fontSize: 32 }} />
            </IconButton>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  whiteSpace: { xs: 'wrap', sm: 'nowrap' },
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FF00AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Vidite Magiju na Instagram-u
              </Typography>
              <Typography variant="caption" sx={{ color: '#888' }}>
                @magicno_ogledalo_nis_nis - Prati nas za nove videe i fotos
              </Typography>
            </Box>
          </Box>

          <CustomButton
            onClick={() => window.open('https://www.instagram.com/magicno_ogledalo_nis_nis/', '_blank')}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '200px', sm: '180px' },
            }}
          >
            Prati Sada
          </CustomButton>
        </Box>

        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
          {instagramPosts.map((post, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <InstagramImage src={post} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
    );
}
