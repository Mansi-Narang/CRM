import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import LeadsHeader from './LeadsHeader';
import KanbanColumn from './KanbanColumn';
import { mockLeads } from '../api/leads.js';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2563eb',
            light: '#3b82f6',
            dark: '#1d4ed8',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1f2937',
            secondary: '#6b7280',
        },
    },
    typography: {
        fontFamily: 'Inter, system-ui, sans-serif',
        h4: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                },
            },
        },
    },
});

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
        </ThemeProvider>
    );
};

export default LeadsDashboard;