import { Card, CardContent, Box, CardProps } from '@mui/material';
import { ReactNode } from 'react';

interface GlowCardProps extends CardProps {
  children: ReactNode;
  glowColor?: string;
}

export default function GlowCard({
  children,
  glowColor = '#FF00AA',
  sx,
  ...props
}: GlowCardProps) {
  return (
    <Card
      sx={{
        bgcolor: 'rgba(26, 10, 46, 0.6)',
        border: `1px solid ${glowColor}40`,
        borderRadius: '16px',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${glowColor}10, transparent)`,
          opacity: 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        },
        
        '&:hover': {
          borderColor: `${glowColor}80`,
          boxShadow: `0 0 30px ${glowColor}50, inset 0 0 30px ${glowColor}10`,
          transform: 'translateY(-4px)',
          
          '&::before': {
            opacity: 1,
          },
        },
        
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
}