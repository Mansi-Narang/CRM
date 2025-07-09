export const mockClients = [
  {
    id: 1,
    name: 'Ashley Lopez',
    title: 'Marketing Manager',
    phone: '(321) 555-8263',
    email: 'jacobadams@gmail.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37292',
    status: 'New lead',
    isActive: true
  },
  {
    id: 2,
    name: 'Andrea Sanchez',
    title: 'Ecommerce Professor',
    phone: '(844) 722-4788',
    email: 'asmith@hotmail.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37293',
    status: 'New lead',
    isActive: true
  },
  {
    id: 3,
    name: 'Brian Scott',
    title: 'Manager',
    phone: '(798) 840-7869',
    email: 'chad@hotmail.com',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37294',
    status: 'Negotiation',
    isActive: true
  },
  {
    id: 4,
    name: 'Jaime Jimenez',
    title: '',
    phone: '(618) 556-7396',
    email: 'bmartinez@yahoo.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37301',
    status: 'Close as lost',
    isActive: true
  },
  {
    id: 5,
    name: 'Anthony Davis',
    title: 'Clinical Psychologist',
    phone: '(312) 522-6378',
    email: 'john_scott@hotmail.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37296',
    status: 'Close as Won',
    isActive: true
  },
  {
    id: 6,
    name: 'Brian Scott',
    title: 'Financial Planner',
    phone: '(973) 838-0348',
    email: 'elizabeth.clark.95@yahoo.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37299',
    status: 'Negotiation',
    isActive: true
  },
  {
    id: 7,
    name: 'Jennifer Edwards',
    title: '',
    phone: '(778) 877-6063',
    email: 'swilson@hotmail.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37302',
    status: 'Close as lost',
    isActive: true
  },
  {
    id: 8,
    name: 'Matthew Martinez',
    title: 'Public Health Specialist',
    phone: '(706) 756-7968',
    email: 'anthonyanderson@yahoo.com',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37303',
    status: 'Close as lost',
    isActive: true
  }
];

// Featured clients for the top section
export const featuredClients = [
  {
    id: 1,
    name: 'Cody Fisher',
    title: 'Senior Developer, Ant Ltd',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37292',
    status: 'New lead'
  },
  {
    id: 2,
    name: 'Tiaali Miski',
    title: 'Senior Developer, Ant Ltd',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37294',
    status: 'New lead'
  },
  {
    id: 3,
    name: 'John Cooper',
    title: 'Senior Developer, Ant Ltd',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    leadId: '#37283',
    status: 'Proposal'
  }
];

export const mockClientDetail = {
  id: 1,
  name: 'Ms. Kroger Rutherford',
  title: 'Senior UI Marketing',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  status: 'Active',
  tags: ['Maintenance', 'Schedule'],
  
  // Contact Information
  contactInfo: {
    status: 'Active',
    company: 'General UI',
    phone: '+1(555) 000-7890',
    email: 'kroger@email.com',
    address: 'North Las Vegas, NV'
  },
  
  // Latest Lead
  latestLead: {
    id: '#37292',
    title: 'Sint proident adipisicing',
    revenue: '$2,000',
    nextMeeting: '2024-01-15'
  },
  
  // Activity Timeline
  activities: [
    {
      id: 1,
      type: 'email',
      title: 'Signed contract',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus magnam accusamus et a, quae...',
      timestamp: '2024-01-10T10:30:00Z',
      participants: [
        { name: 'John Doe', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Jane Smith', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Meet call',
      description: 'Qui culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi.',
      timestamp: '2024-01-08T14:00:00Z',
      participants: [
        { name: 'Sarah Wilson', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Mike Johnson', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    },
    {
      id: 3,
      type: 'note',
      title: 'Note added',
      description: 'Qui culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi.',
      timestamp: '2024-01-05T09:15:00Z',
      participants: [
        { name: 'Alex Brown', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Lisa Davis', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    },
    {
      id: 4,
      type: 'email',
      title: 'Sent email',
      description: 'Qui culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi aliqua dolore.',
      timestamp: '2024-01-03T16:45:00Z',
      participants: [
        { name: 'Tom Wilson', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Emma Taylor', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    },
    {
      id: 5,
      type: 'email',
      title: 'Sent email',
      description: 'Qui culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi aliqua dolore.',
      timestamp: '2024-01-01T11:20:00Z',
      participants: [
        { name: 'Chris Anderson', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Amy Clark', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    },
    {
      id: 6,
      type: 'call',
      title: 'Called',
      description: 'Qui culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi aliqua dolore.',
      timestamp: '2023-12-28T13:30:00Z',
      participants: [
        { name: 'David Lee', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
        { name: 'Rachel Green', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
      ]
    }
  ]
};