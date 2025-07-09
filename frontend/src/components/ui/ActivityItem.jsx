import { Typography, Box } from '@mui/material';
import { Avatar } from './';
import { format } from 'date-fns';

const ActivityItem = ({ 
  type, 
  title, 
  description, 
  timestamp, 
  participants = [],
  icon,
  iconColor = '#6b7280'
}) => {
  const getIconBackground = (type) => {
    switch (type) {
      case 'email':
        return '#dbeafe';
      case 'call':
        return '#dcfce7';
      case 'meeting':
        return '#fef3c7';
      case 'note':
        return '#f3e8ff';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="flex gap-3 p-4 border-b border-gray-100 last:border-b-0">
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
        style={{ backgroundColor: getIconBackground(type) }}
      >
        {icon && (
          <div style={{ color: iconColor, fontSize: '16px' }}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-1">
          <Typography variant="subtitle2" className="font-medium text-gray-900">
            {title}
          </Typography>
          <Typography variant="caption" className="text-gray-500 flex-shrink-0 ml-2">
            {format(new Date(timestamp), 'MMM dd, yyyy')}
          </Typography>
        </div>
        
        {description && (
          <Typography variant="body2" className="text-gray-600 mb-2 leading-relaxed">
            {description}
          </Typography>
        )}
        
        {participants.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {participants.slice(0, 3).map((participant, index) => (
                <Avatar
                  key={index}
                  src={participant.avatar}
                  alt={participant.name}
                  size="small"
                  className="border-2 border-white"
                />
              ))}
            </div>
            {participants.length > 3 && (
              <Typography variant="caption" className="text-gray-500">
                +{participants.length - 3} more
              </Typography>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;