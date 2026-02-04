import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C61CFF',
      light: '#E74DFF',
      dark: '#9D00CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF00AA',
      light: '#FF4D9F',
      dark: '#CC0088',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0015',
      paper: '#1A0A2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C0C0C0',
    },
    divider: 'rgba(255, 0, 170, 0.2)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 700,
      letterSpacing: '0px',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '0.95rem',
      fontWeight: 600,
      letterSpacing: '0.3px',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
      fontWeight: 400,
      letterSpacing: '0.3px',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      fontWeight: 400,
      letterSpacing: '0.2px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.5px',
      fontSize: '1rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 700,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          letterSpacing: '0.5px',
        },
        contained: {
          boxShadow: '0 0 20px rgba(198, 28, 255, 0.4)',
          '&:hover': {
            boxShadow: '0 0 30px rgba(198, 28, 255, 0.7)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            boxShadow: '0 0 15px rgba(255, 0, 170, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#FFFFFF',
            backgroundColor: 'rgba(26, 10, 46, 0.8)',
            borderRadius: '12px',
            transition: 'all 0.3s',
            '& fieldset': {
              borderColor: 'rgba(255, 0, 170, 0.3)',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 0, 170, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF00AA',
              boxShadow: '0 0 15px rgba(255, 0, 170, 0.4)',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#888',
            opacity: 1,
          },
          '& .MuiInputLabel-root': {
            color: '#C0C0C0',
            '&.Mui-focused': {
              color: '#FF00AA',
            },
          },
        },
      },
    },
  },
});

export default theme;
