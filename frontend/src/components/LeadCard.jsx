import { Card, CardContent, Avatar, Chip, Typography } from '@mui/material';
import { CalendarToday, Person, AttachMoney } from '@mui/icons-material';
import { format } from 'date-fns';

const LeadCard = ({ lead }) => {
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'returning':
                return 'bg-green-100 text-green-800';
            case 'negotiation':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <Card className="lead-card mb-4 border-0 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                    <Typography
                        variant="subtitle1"
                        className="font-medium text-gray-900 leading-tight"
                        style={{ fontSize: '0.875rem' }}
                    >
                        {lead.title}
                    </Typography>
                    {lead.status && (
                        <Chip
                            label={lead.status}
                            size="small"
                            className={`text-xs font-medium px-2 py-1 ${getStatusColor(lead.status)}`}
                            style={{
                                height: '20px',
                                fontSize: '0.75rem',
                                backgroundColor: 'transparent',
                                border: 'none'
                            }}
                        />
                    )}
                </div>

                <div className="flex items-center mb-2">
                    <AttachMoney className="w-4 h-4 text-gray-500 mr-1" />
                    <Typography variant="body2" className="text-gray-600 font-medium">
                        Est. revenue: <span className="text-gray-900 font-semibold">{formatCurrency(lead.revenue)}</span>
                    </Typography>
                </div>

                <div className="flex items-center mb-3">
                    <CalendarToday className="w-4 h-4 text-gray-500 mr-1" />
                    <Typography variant="body2" className="text-gray-600">
                        Next meeting: <span className="text-gray-900">{format(new Date(lead.nextMeeting), 'MMM dd, yyyy')}</span>
                    </Typography>
                </div>

                <div className="flex items-center">
                    <Person className="w-4 h-4 text-gray-500 mr-1" />
                    <Typography variant="body2" className="text-gray-600 mr-2">
                        Customer:
                    </Typography>
                    <div className="flex items-center">
                        <Avatar
                            src={lead.customer.avatar}
                            sx={{ width: 20, height: 20 }}
                            className="mr-2"
                        >
                            {lead.customer.name.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" className="text-gray-900 font-medium">
                            {lead.customer.name}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default LeadCard;