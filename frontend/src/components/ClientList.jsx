import { useState } from 'react';
import { Container, Typography, IconButton, Box } from '@mui/material';
import { FilterList, ViewModule, Close } from '@mui/icons-material';
import { 
  Button, 
  SearchInput, 
  StatusChip, 
  Avatar, 
  Card, 
  Table, 
  Tabs, 
  Pagination 
} from './ui';
import { mockClients, featuredClients } from '../api/clients.js';

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNewClients, setShowNewClients] = useState(true);
  const itemsPerPage = 8;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 0) return matchesSearch; // All clients
    if (activeTab === 1) return matchesSearch && client.isActive; // Active
    if (activeTab === 2) return matchesSearch && !client.isActive; // Inactive
    
    return matchesSearch;
  });

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container maxWidth="xl">
        {/* Header */}
        <Card className="mb-6">
          <Card.Header>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Typography variant="h4" className="font-bold text-gray-900">
                  Client list
                </Typography>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <SearchInput
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="sm:w-64"
                />
                
                <div className="flex gap-2">
                  <IconButton size="small" className="border border-gray-300">
                    <FilterList className="w-4 h-4" />
                  </IconButton>
                  
                  <IconButton size="small" className="border border-gray-300">
                    <ViewModule className="w-4 h-4" />
                  </IconButton>
                  
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: '#2563eb' }}
                  >
                    New
                  </Button>
                </div>
              </div>
            </div>
          </Card.Header>
        </Card>

        {/* New Clients This Week */}
        {showNewClients && (
          <Card className="mb-6">
            <Card.Body>
              <div className="flex items-center justify-between mb-4">
                <Typography variant="h6" className="font-semibold text-gray-900">
                  New clients this week
                </Typography>
                <IconButton 
                  size="small" 
                  onClick={() => setShowNewClients(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Close fontSize="small" />
                </IconButton>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredClients.map((client) => (
                  <Card key={client.id} className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar src={client.avatar} alt={client.name} />
                      <div className="flex-1">
                        <Typography variant="subtitle2" className="font-semibold text-gray-900">
                          {client.name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 text-sm">
                          {client.title}
                        </Typography>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography variant="body2" className="text-gray-600 text-sm">
                          Lead
                        </Typography>
                        <Typography variant="body2" className="font-medium text-blue-600">
                          {client.leadId}
                        </Typography>
                      </div>
                      <StatusChip status={client.status} />
                    </div>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        )}

        {/* Main Content */}
        <Card>
          <Card.Header>
            <Tabs value={activeTab} onChange={handleTabChange}>
              <Tabs.Tab label="All clients" />
              <Tabs.Tab label="Active" />
              <Tabs.Tab label="Inactive" />
            </Tabs>
          </Card.Header>

          <Card.Body className="p-0">
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Latest lead</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell width={50}></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {paginatedClients.map((client) => (
                  <Table.Row key={client.id}>
                    <Table.Cell>
                      <div className="flex items-center gap-3">
                        <Avatar src={client.avatar} alt={client.name} size="small" />
                        <div>
                          <Typography variant="subtitle2" className="font-medium text-gray-900">
                            {client.name}
                          </Typography>
                          {client.title && (
                            <Typography variant="body2" className="text-gray-500 text-sm">
                              {client.title}
                            </Typography>
                          )}
                        </div>
                      </div>
                    </Table.Cell>
                    
                    <Table.Cell>
                      <Typography variant="body2" className="text-gray-600">
                        {client.phone}
                      </Typography>
                    </Table.Cell>
                    
                    <Table.Cell>
                      <Typography variant="body2" className="text-gray-600">
                        {client.email}
                      </Typography>
                    </Table.Cell>
                    
                    <Table.Cell>
                      <Typography variant="body2" className="font-medium text-blue-600">
                        {client.leadId}
                      </Typography>
                    </Table.Cell>
                    
                    <Table.Cell>
                      <StatusChip status={client.status} />
                    </Table.Cell>
                    
                    <Table.Cell>
                      <Table.ActionButton />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card.Body>

          {/* Pagination */}
          {totalPages > 1 && (
            <Card.Header>
              <div className="flex justify-center">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  size="small"
                />
              </div>
            </Card.Header>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default ClientList;