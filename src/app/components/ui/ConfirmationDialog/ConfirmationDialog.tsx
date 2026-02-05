import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
} from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  email?: string;
  buttonText?: string;
}

export default function ConfirmationDialog({
  open,
  onClose,
  title = 'Zahvaljujemo se!',
  message,
  email,
  buttonText = 'Zatvori',
}: ConfirmationDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundImage:
            'linear-gradient(135deg, rgba(255, 0, 170, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: 'rgba(255, 0, 170, 0.15)',
          borderBottom: '1px solid rgba(255, 0, 170, 0.3)',
          fontWeight: 600,
          fontSize: '1.3rem',
        }}
      >
        ✓ {title}
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            {message}
          </Typography>
          {email && (
            <Box
              sx={{
                backgroundColor: 'rgba(255, 0, 170, 0.1)',
                border: '1px solid rgba(255, 0, 170, 0.3)',
                borderRadius: 1,
                p: 2,
              }}
            >
              <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mb: 0.5 }}>
                Potvrdni e-mail šaljem na:
              </Typography>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                {email}
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <CustomButton onClick={onClose} fullWidth>
          {buttonText}
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
