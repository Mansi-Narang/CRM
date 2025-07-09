import { Typography, Box } from '@mui/material';

const InfoItem = ({ 
  icon, 
  label, 
  value, 
  href, 
  iconColor = '#6b7280',
  className = ''
}) => {
  const content = (
    <div className={`flex items-center gap-3 py-2 ${className}`}>
      <div 
        className="w-5 h-5 flex items-center justify-center flex-shrink-0"
        style={{ color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <Typography variant="body2" className="text-gray-600 text-sm">
          {label}
        </Typography>
        <Typography 
          variant="body2" 
          className={`font-medium ${href ? 'text-blue-600 hover:text-blue-800' : 'text-gray-900'}`}
        >
          {value}
        </Typography>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:bg-gray-50 rounded-md px-2 -mx-2 transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export default InfoItem;