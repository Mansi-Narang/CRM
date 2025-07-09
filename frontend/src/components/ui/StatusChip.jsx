import { Chip } from '@mui/material';

const StatusChip = ({ status, variant = 'filled', size = 'small' }) => {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'new lead':
        return {
          backgroundColor: '#dbeafe',
          color: '#1d4ed8',
          border: '1px solid #93c5fd'
        };
      case 'proposal':
        return {
          backgroundColor: '#fef3c7',
          color: '#d97706',
          border: '1px solid #fcd34d'
        };
      case 'negotiation':
        return {
          backgroundColor: '#fed7d7',
          color: '#c53030',
          border: '1px solid #feb2b2'
        };
      case 'close as lost':
        return {
          backgroundColor: '#f3f4f6',
          color: '#6b7280',
          border: '1px solid #d1d5db'
        };
      case 'close as won':
        return {
          backgroundColor: '#dcfce7',
          color: '#16a34a',
          border: '1px solid #86efac'
        };
      default:
        return {
          backgroundColor: '#f3f4f6',
          color: '#6b7280',
          border: '1px solid #d1d5db'
        };
    }
  };

  if (!status) return null;

  return (
    <Chip
      label={status}
      variant={variant}
      size={size}
      sx={{
        ...getStatusStyles(status),
        fontWeight: 500,
        fontSize: '0.75rem',
        height: '24px',
        '& .MuiChip-label': {
          px: 1.5,
        },
      }}
    />
  );
};

export default StatusChip;