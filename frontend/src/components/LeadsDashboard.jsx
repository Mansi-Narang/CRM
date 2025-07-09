import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import LeadsHeader from './LeadsHeader';
import KanbanColumn from './KanbanColumn';
import { mockLeads } from '../api/leads.js';

const LeadsDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filterLeadsByStage = (stage) => {
        return mockLeads.filter(lead =>
            lead.stage === stage &&
            lead.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const calculateTotalValue = (leads) => {
        return leads.reduce((total, lead) => total + lead.revenue, 0);
    };

    const newLeads = filterLeadsByStage('new');
    const proposalLeads = filterLeadsByStage('proposals');
    const negotiationLeads = filterLeadsByStage('negotiation');
    const contractLeads = filterLeadsByStage('contracts');

    const handleAddLead = () => {
        console.log('Add new lead clicked');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Container maxWidth="xl">
                <LeadsHeader
                    onAddLead={handleAddLead}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    <KanbanColumn
                        title="New"
                        leads={newLeads}
                        count={newLeads.length}
                        totalValue={calculateTotalValue(newLeads)}
                        bgColor="bg-blue-500"
                        textColor="text-white"
                    />

                    <KanbanColumn
                        title="Proposals"
                        leads={proposalLeads}
                        count={proposalLeads.length}
                        totalValue={calculateTotalValue(proposalLeads)}
                        bgColor="bg-purple-500"
                        textColor="text-white"
                    />

                    <KanbanColumn
                        title="Negotiation"
                        leads={negotiationLeads}
                        count={negotiationLeads.length}
                        totalValue={calculateTotalValue(negotiationLeads)}
                        bgColor="bg-green-500"
                        textColor="text-white"
                    />

                    <KanbanColumn
                        title="Contracts sent"
                        leads={contractLeads}
                        count={contractLeads.length}
                        totalValue={calculateTotalValue(contractLeads)}
                        bgColor="bg-orange-500"
                        textColor="text-white"
                    />
                </div>
            </Container>
        </div>
    );
};

export default LeadsDashboard;