import { Avatar as MuiAvatar } from '@mui/material';

const Avatar = ({ 
  src, 
  alt, 
  size = 'medium', 
  children, 
  className = '',
  ...props 
}) => {
  const getSizeStyles = (size) => {
    switch (size) {
      case 'small':
        return { width: 32, height: 32, fontSize: '0.875rem' };
      case 'large':
        return { width: 56, height: 56, fontSize: '1.25rem' };
      case 'medium':
      default:
        return { width: 40, height: 40, fontSize: '1rem' };
    }
  };

  return (
    <MuiAvatar
      src={src}
      alt={alt}
      className={className}
      sx={{
        ...getSizeStyles(size),
        backgroundColor: '#e5e7eb',
        color: '#374151',
        fontWeight: 500,
        ...props.sx
      }}
      {...props}
    >
      {children || (alt ? alt.charAt(0).toUpperCase() : '')}
    </MuiAvatar>
  );
};

export default Avatar;