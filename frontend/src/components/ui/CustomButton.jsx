import { Button as MuiButton } from '@mui/material';

const Button = ({ 
  variant = 'contained', 
  size = 'medium', 
  color = 'primary',
  startIcon,
  endIcon,
  children,
  className = '',
  ...props 
}) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      className={`${className}`}
      sx={{
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: 1.5,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;