import { Typography } from '@mui/material';
import LeadCard from './LeadCard.jsx';

const KanbanColumn = ({ title, leads, count, totalValue, bgColor, textColor }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="kanban-column bg-gray-50 rounded-lg p-4 min-h-[600px]">
            <div className={`${bgColor} ${textColor} rounded-md px-3 py-2 mb-4`}>
                <div className="flex justify-between items-center">
                    <Typography variant="h6" className="font-semibold text-sm">
                        {title}
                    </Typography>
                    <Typography variant="body2" className="font-medium">
                        {count} deals - {formatCurrency(totalValue)}
                    </Typography>
                </div>
            </div>

            <div className="space-y-3">
                {leads.map((lead) => (
                    <div key={lead.id} className="fade-in">
                        <LeadCard lead={lead} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;