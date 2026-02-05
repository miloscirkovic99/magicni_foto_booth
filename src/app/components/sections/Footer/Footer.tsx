import { Box, Grid, Typography, IconButton, Link, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

// const navLinks = ['Početna', 'O nama', 'Usluge', 'Tipovi događaja', 'Kontakt'];
const socialLinks = [
  // { icon: <YouTubeIcon />, label: 'YouTube', url: 'https://www.youtube.com/magicmirror' },
  { icon: <InstagramIcon />, label: 'Instagram', url: 'https://www.instagram.com/magicno_ogledalo_nis_nis/' },
  // { icon: <FacebookIcon />, label: 'Facebook', url: 'https://www.facebook.com/magicmirror' },
];

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: 'rgba(10, 0, 21, 0.9)',
          borderTop: '1px solid rgba(255, 0, 170, 0.2)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
             <img src="/logo.png" alt="Magic Mirror Logo" width={120} height={120} style={{ marginLeft: 8 }} />
            <Typography variant="body2" sx={{ color: '#C0C0C0', mb: 3 }}>
              Pretvorite svaki trenutak u nezaboravno iskustvo kroz interaktivnu fotografiju.
            </Typography>
          </Grid>

        

          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#FF00AA',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                letterSpacing: '1px',
              }}
            >
              Kontakt
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: { xs: 'center', md: 'flex-end' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#FF00AA', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#C0C0C0' }}>
                  +381 61 242 36 83
                
                </Typography>
              </Box>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#FF00AA', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#C0C0C0' }}>
                
                  +381 60 661 5446
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#FF00AA', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#C0C0C0' }}>
                  nismagicnoogledalo@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 0, 170, 0.2)',
            pt: 4,
            pb: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="caption" sx={{ color: '#888' }}>
                © 2025 Magic Mirror. Sva prava zadržana.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 1 }}>
              {socialLinks.map(({ icon, label, url }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  component="a"
                  sx={{
                    color: 'white',
                    border: '2px solid rgba(255, 0, 170, 0.3)',
                    transition: 'all 0.3s',
                    
                    '&:hover': {
                      borderColor: '#FF00AA',
                      boxShadow: '0 0 15px rgba(255, 0, 170, 0.4)',
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Box>
        </Container>
      </Box>
    </footer>
  );
}
