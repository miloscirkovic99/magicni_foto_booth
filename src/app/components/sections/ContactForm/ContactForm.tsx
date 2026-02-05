import { useState } from 'react';
import { Box, TextField, Typography, Container, Grid, Alert } from '@mui/material';
import CustomButton from '../../ui/CustomButton/CustomButton';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import ConfirmationDialog from '../../ui/ConfirmationDialog/ConfirmationDialog';
import { CustomFormData } from '../../../../shared/types/index';
import useContactFormSubmit from '../../../hooks/useContactFormSubmit';

export default function ContactForm() {
  const [formData, setFormData] = useState<CustomFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const { isLoading, error, success, submitForm, resetState } = useContactFormSubmit();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error?.field === name) {
      resetState();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      console.error('Please fill in all required fields');
      return;
    }

    const isSuccess = await submitForm(formData);
    
    if (isSuccess) {
      setDialogOpen(true);
      setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    resetState();
  };

  return (
    <Box
      component="section"
      id="contact"
      aria-label="Kontaktirajte nas - Zakaži Magic Mirror"
      sx={{
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 0, 170, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader 
          title="Tvoj događaj zaslužuje utisak" 
          subtitle="Popuni obrazac i naš tim će te kontaktirati u roku od 24h sa detaljima i prilagođenom ponudom za tvoj događaj."
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
          }}
        >
          {error && (
            <Alert
              severity="error"
              onClose={resetState}
              sx={{
                animation: 'slideDown 0.3s ease-out',
              }}
            >
              {error.message}
            </Alert>
          )}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Ime i prezime"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Unesi svoje ime..."
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Broj telefona"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+381..."
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Email adresa"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tvoj@email.com"
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Tip događaja"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                placeholder="Venčanje, Rođendan, Korporativna proslava..."
                variant="outlined"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Poruka"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Fortuna je, broj gostiju, datumEvent-a..."
                variant="outlined"
              />
            </Grid>
          </Grid>

          <CustomButton
            type="submit"
            fullWidth
            disabled={isLoading}
            sx={{
              py: 1.5,
              fontSize: '1rem',
              mt: 1,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Slanje u toku...' : 'Pošalji zahtev'}
          </CustomButton>

          <Typography
            variant="caption"
            sx={{
              color: '#888',
              textAlign: 'center',
              mt: 1,
            }}
          >
            Radujemo se Vašem zahtevu i budućoj saradnji! 🎉
          </Typography>
        </Box>
      </Container>

      <ConfirmationDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        message="Vaš zahtev je uspešno poslat! Proverite vašu e-mail adresu za potvrdu i dodatne detalje."
        email={formData.email}
      />
      </Box>
    );
}