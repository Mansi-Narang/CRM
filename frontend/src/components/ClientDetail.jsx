import { useState } from 'react';
import { 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Box
} from '@mui/material';
import {
  ArrowBack,
  Edit,
  Phone,
  Email,
  LocationOn,
  Business,
  CheckCircle,
  CalendarToday,
  AttachMoney,
  MoreVert,
  Call,
  MailOutline,
  StickyNote2,
  VideoCall
} from '@mui/icons-material';
import { 
  Button, 
  Card, 
  Avatar, 
  Badge,
  ActivityItem,
  InfoItem
} from './ui';
import { mockClientDetail } from '../api/clients';

const ClientDetail = ({ onBack }) => {
  const [client] = useState(mockClientDetail);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'email':
        return <MailOutline />;
      case 'call':
        return <Call />;
      case 'meeting':
        return <VideoCall />;
      case 'note':
        return <StickyNote2 />;
      default:
        return <CheckCircle />;
    }
  };

  const getActivityIconColor = (type) => {
    switch (type) {
      case 'email':
        return '#2563eb';
      case 'call':
        return '#16a34a';
      case 'meeting':
        return '#d97706';
      case 'note':
        return '#7c3aed';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Client Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Header */}
            <Card>
              <Card.Header>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {onBack && (
                      <IconButton onClick={onBack} size="small">
                        <ArrowBack />
                      </IconButton>
                    )}
                    <Typography variant="h5" className="font-semibold text-gray-900">
                      Client details
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: '#2563eb' }}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Header>
            </Card>

            {/* Client Profile */}
            <Card>
              <Card.Body>
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Avatar 
                      src={client.avatar} 
                      alt={client.name} 
                      size="large"
                      sx={{ width: 80, height: 80 }}
                    />
                    <div className="absolute -top-1 -right-1">
                      <Badge color="success" size="small">
                        {client.contactInfo.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <Typography variant="h6" className="font-semibold text-gray-900 mb-1">
                    {client.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-3">
                    {client.title}
                  </Typography>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {client.tags.map((tag, index) => (
                      <Badge key={index} color="info" size="small">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Divider className="my-4" />

                {/* General Info */}
                <div className="space-y-1">
                  <Typography variant="subtitle2" className="font-semibold text-gray-900 mb-3">
                    General info
                  </Typography>
                  
                  <InfoItem
                    icon={<CheckCircle />}
                    label="Status"
                    value={client.contactInfo.status}
                    iconColor="#16a34a"
                  />
                  
                  <InfoItem
                    icon={<Business />}
                    label="Company"
                    value={client.contactInfo.company}
                    iconColor="#6b7280"
                  />
                  
                  <InfoItem
                    icon={<Phone />}
                    label="Phone number"
                    value={client.contactInfo.phone}
                    href={`tel:${client.contactInfo.phone}`}
                    iconColor="#2563eb"
                  />
                  
                  <InfoItem
                    icon={<Email />}
                    label="Email"
                    value={client.contactInfo.email}
                    href={`mailto:${client.contactInfo.email}`}
                    iconColor="#2563eb"
                  />
                  
                  <InfoItem
                    icon={<LocationOn />}
                    label="Address"
                    value={client.contactInfo.address}
                    iconColor="#6b7280"
                  />
                </div>
              </Card.Body>
            </Card>

            {/* Latest Lead */}
            <Card>
              <Card.Body>
                <div className="flex items-center justify-between mb-4">
                  <Typography variant="subtitle2" className="font-semibold text-gray-900">
                    Latest lead
                  </Typography>
                  <Button variant="text" size="small" sx={{ color: '#2563eb' }}>
                    View more
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Typography variant="body2" className="text-gray-600 text-sm mb-1">
                      Lead ID
                    </Typography>
                    <Typography variant="body2" className="font-medium text-blue-600">
                      {client.latestLead.id}
                    </Typography>
                  </div>
                  
                  <div>
                    <Typography variant="body2" className="text-gray-600 text-sm mb-1">
                      Title
                    </Typography>
                    <Typography variant="body2" className="font-medium text-gray-900">
                      {client.latestLead.title}
                    </Typography>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Typography variant="body2" className="text-gray-600 text-sm mb-1">
                        Est. revenue
                      </Typography>
                      <Typography variant="body2" className="font-medium text-gray-900">
                        {client.latestLead.revenue}
                      </Typography>
                    </div>
                    
                    <div>
                      <Typography variant="body2" className="text-gray-600 text-sm mb-1">
                        Next meeting
                      </Typography>
                      <Typography variant="body2" className="font-medium text-gray-900">
                        Jan 15, 2024
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Right Column - Activity Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <Card.Header>
                <div className="flex items-center justify-between">
                  <Typography variant="h6" className="font-semibold text-gray-900">
                    Activity log
                  </Typography>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </div>
              </Card.Header>
              
              <Card.Body className="p-0">
                <div className="max-h-[800px] overflow-y-auto">
                  {client.activities.map((activity) => (
                    <ActivityItem
                      key={activity.id}
                      type={activity.type}
                      title={activity.title}
                      description={activity.description}
                      timestamp={activity.timestamp}
                      participants={activity.participants}
                      icon={getActivityIcon(activity.type)}
                      iconColor={getActivityIconColor(activity.type)}
                    />
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-100">
                  <Button 
                    variant="text" 
                    size="small" 
                    sx={{ color: '#2563eb' }}
                    fullWidth
                  >
                    View more
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientDetail;