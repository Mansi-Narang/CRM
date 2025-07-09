import { Chip } from '@mui/material';

const Badge = ({ 
  children, 
  variant = 'filled', 
  color = 'default',
  size = 'small',
  className = '',
  ...props 
}) => {
  const getColorStyles = (color) => {
    switch (color) {
      case 'success':
        return {
          backgroundColor: '#dcfce7',
          color: '#16a34a',
          border: '1px solid #86efac'
        };
      case 'warning':
        return {
          backgroundColor: '#fef3c7',
          color: '#d97706',
          border: '1px solid #fcd34d'
        };
      case 'error':
        return {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          border: '1px solid #fca5a5'
        };
      case 'info':
        return {
          backgroundColor: '#dbeafe',
          color: '#2563eb',
          border: '1px solid #93c5fd'
        };
      case 'purple':
        return {
          backgroundColor: '#f3e8ff',
          color: '#7c3aed',
          border: '1px solid #c4b5fd'
        };
      default:
        return {
          backgroundColor: '#f3f4f6',
          color: '#6b7280',
          border: '1px solid #d1d5db'
        };
    }
  };

  return (
    <Chip
      label={children}
      variant={variant}
      size={size}
      className={className}
      sx={{
        ...getColorStyles(color),
        fontWeight: 500,
        fontSize: '0.75rem',
        height: '24px',
        '& .MuiChip-label': {
          px: 1.5,
        },
        ...props.sx
      }}
      {...props}
    />
  );
};

export default Badge;