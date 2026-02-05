import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '../CustomButton/CustomButton';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const navItems = [
  { label: 'Početna', id: 'hero' },
  { label: 'O nama', id: 'about' },
  { label: 'Usluge', id: 'why' },
  { label: 'Tipovi događaja', id: 'events' },
  { label: 'Cene', id: 'pricing' },
  { label: 'Kontakt', id: 'contact' },
];

export function TopNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'rgba(10, 0, 21, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 0, 170, 0.1)',
        boxShadow: '0 0 20px rgba(198, 28, 255, 0.15)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            px: { xs: 0, md: 2 },
            py: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF00AA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              letterSpacing: '1px',
            }}
          >
            Magic Mirror
          </Typography> */}
          <img src="/logo.png" alt="Magic Mirror Logo" width={80} height={80} style={{ marginLeft: 8 }} />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              {navItems.map(item => (
                <Typography
                  key={item.id}
                  component="button"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: '#C0C0C0',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2.5,
                    py: 1,
                    borderRadius: '6px',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    
                    '&:hover': {
                      color: '#FF00AA',
                      bgcolor: 'rgba(255, 0, 170, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}

          {!isMobile && (
            <CustomButton 
              onClick={() => scrollToSection('contact')}
              sx={{ whiteSpace: 'nowrap', px: 3 }}
            >
              Zakaži sada
            </CustomButton>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                color: '#FF00AA',
                
                '&:hover': {
                  bgcolor: 'rgba(255, 0, 170, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            sx={{
              '& .MuiDrawer-paper': {
                bgcolor: 'rgba(10, 0, 21, 0.98)',
                borderLeft: '1px solid rgba(255, 0, 170, 0.2)',
                width: '280px',
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <IconButton
                onClick={() => setMobileMenuOpen(false)}
                sx={{ color: '#FF00AA', mb: 2 }}
              >
                <CloseIcon />
              </IconButton>

              <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {navItems.map(item => (
                  <ListItem
                    key={item.id}
                    component="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    sx={{
                      borderRadius: '8px',
                      color: '#C0C0C0',
                      transition: 'all 0.3s',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      
                      '&:hover': {
                        bgcolor: 'rgba(255, 0, 170, 0.1)',
                        color: '#FF00AA',
                      },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>

              <CustomButton 
                fullWidth 
                sx={{ mt: 3 }}
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
              >
                Zakaži sada
              </CustomButton>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
