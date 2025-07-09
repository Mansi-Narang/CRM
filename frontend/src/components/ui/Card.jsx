import { Card as MuiCard, CardContent } from '@mui/material';

const Card = ({ 
  children, 
  className = '', 
  elevation = 0,
  variant = 'outlined',
  ...props 
}) => {
  return (
    <MuiCard
      elevation={elevation}
      variant={variant}
      className={className}
      sx={{
        borderRadius: 2,
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = '', ...props }) => {
  return (
    <CardContent className={`p-6 ${className}`} {...props}>
      {children}
    </CardContent>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;