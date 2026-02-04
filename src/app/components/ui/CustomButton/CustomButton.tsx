import { Button, ButtonProps } from '@mui/material';
import { useMemo } from 'react';

type ButtonVariant = 'contained' | 'outlined' | 'ghost';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: ButtonVariant;
}

export default function CustomButton({
  variant = 'contained',
  sx,
  children,
  ...props
}: CustomButtonProps) {
  const buttonVariant = useMemo(() => {
    if (variant === 'ghost' || variant === 'outlined') {
      return 'outlined' as const;
    }
    return 'contained' as const;
  }, [variant]);

  const baseStyles = {
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '12px 32px',
    textTransform: 'none' as const,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  const getVariantStyles = () => {
    if (variant === 'ghost') {
      return {
        ...baseStyles,
        background: 'transparent',
        color: '#FF00AA',
        borderColor: '#FF00AA',
        border: '2px solid #FF00AA',
        '&:hover': {
          bgcolor: 'rgba(255, 0, 170, 0.1)',
          boxShadow: '0 0 20px rgba(255, 0, 170, 0.6)',
          borderColor: '#FF00AA',
          transform: 'translateY(-2px)',
        },
      };
    }

    if (variant === 'outlined') {
      return {
        ...baseStyles,
        borderColor: '#FF00AA',
        color: '#FF00AA',
        border: '2px solid #FF00AA',
        '&:hover': {
          boxShadow: '0 0 20px rgba(255, 0, 170, 0.5)',
          borderColor: '#FF4D9F',
          transform: 'translateY(-2px)',
        },
      };
    }

    return {
      ...baseStyles,
      background: 'linear-gradient(135deg, #C61CFF, #FF00AA)',
      color: '#FFFFFF',
      boxShadow: '0 0 20px rgba(198, 28, 255, 0.6)',
      '&:hover': {
        boxShadow: '0 0 30px rgba(198, 28, 255, 0.8)',
        transform: 'translateY(-2px)',
        background: 'linear-gradient(135deg, #E74DFF, #FF4D9F)',
      },
    };
  };

  return (
    <Button
      variant={buttonVariant}
      sx={{
        ...getVariantStyles(),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}