import { Typography, Box } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeader({ title, subtitle, highlight, headingLevel = 'h2' }: SectionHeaderProps) {
  return (
    <Box
      component="hgroup"
      sx={{
        textAlign: 'center',
        mb: { xs: 3, md: 6 },
        animation: 'fadeInUp 0.8s ease-out',
        '@keyframes fadeInUp': {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Typography
        variant={headingLevel}
        component={headingLevel}
        sx={{
          color: 'white',
          fontWeight: 700,
          mb: 1,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FF00AA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: '#C0C0C0',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}