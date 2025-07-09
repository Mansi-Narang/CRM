import { useState } from 'react';
import {
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Avatar,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Tab,
  Tabs,
  Alert,
  Paper,
  IconButton
} from '@mui/material';
import {
  Close,
  Add,
  Assignment,
  CheckCircle,
  ArrowBack
} from '@mui/icons-material';

const CreateLeadPage = ({ onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: 'Sint proident adipisicing',
    product: 'Sample Business',
    noOfLicense: '100',
    client: 'Kroger',
    company: 'General System',
    paymentMethod: 'Bank transfer',
    currency: 'USD',
    budget: '2,000',
    deposit: '',
    estRevenue: '2,000',
    estCloseDate: '2022-10-10',
    pic: [
      { name: 'Sharon Hoffman', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
      { name: 'Carol Siegel', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
    ],
    supervisor: []
  });

  const steps = ['New lead', 'Proposal', 'Negotiation', 'Contract sent', 'Close'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    console.log('Saving lead:', formData);
  };

  const removePerson = (index, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {onBack && (
                  <IconButton onClick={onBack} size="small">
                    <ArrowBack />
                  </IconButton>
                )}
                <div className="flex items-center gap-2">
                  <Typography variant="h5" className="font-semibold">
                    Create lead
                  </Typography>
                  <Chip 
                    label="#358789043" 
                    size="small" 
                    sx={{ 
                      backgroundColor: '#e3f2fd', 
                      color: '#1976d2',
                      fontSize: '0.75rem'
                    }} 
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outlined" 
                  onClick={onBack}
                  size="small"
                >
                  Cancel
                </Button>
                <Button 
                  variant="contained" 
                  onClick={handleSave}
                  size="small"
                  sx={{ backgroundColor: '#2563eb' }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Progress Stepper */}
            <Box sx={{ mb: 4 }}>
              <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel 
                      StepIconComponent={({ active, completed }) => (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          completed ? 'bg-green-500 text-white' : 
                          active ? 'bg-blue-500 text-white' : 
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {completed ? <CheckCircle sx={{ fontSize: 16 }} /> : index + 1}
                        </div>
                      )}
                    >
                      <Typography variant="caption" className="text-gray-600">
                        {label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
              <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab 
                  icon={<Assignment />} 
                  label="Summary" 
                  iconPosition="start"
                  sx={{ minHeight: 48, textTransform: 'none' }}
                />
                <Tab 
                  label="Task list" 
                  sx={{ minHeight: 48, textTransform: 'none' }}
                />
                <Tab 
                  label="Related" 
                  sx={{ minHeight: 48, textTransform: 'none', color: '#2563eb' }}
                />
              </Tabs>
            </Box>

            {/* Form Content */}
            {activeTab === 0 && (
              <div className="space-y-8">
                {/* General Info Section */}
                <div>
                  <Typography variant="h6" className="font-semibold mb-1">
                    General info
                  </Typography>
                  <Typography variant="body2" className="text-gray-500 mb-6">
                    Nisl laborum eiusmod mollit pa
                  </Typography>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Title
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Typography variant="body2" className="font-medium mb-2">
                          Product
                        </Typography>
                        <FormControl fullWidth size="small">
                          <Select
                            value={formData.product}
                            onChange={(e) => handleInputChange('product', e.target.value)}
                          >
                            <MenuItem value="Sample Business">Sample Business</MenuItem>
                            <MenuItem value="Enterprise">Enterprise</MenuItem>
                            <MenuItem value="Startup">Startup</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div>
                        <Typography variant="body2" className="font-medium mb-2">
                          No. of license
                        </Typography>
                        <div className="flex items-center gap-2">
                          <TextField
                            size="small"
                            value={formData.noOfLicense}
                            onChange={(e) => handleInputChange('noOfLicense', e.target.value)}
                            sx={{ flexGrow: 1 }}
                          />
                          <Chip 
                            label="Returning" 
                            size="small"
                            sx={{ 
                              backgroundColor: '#e8f5e8', 
                              color: '#2e7d32',
                              '& .MuiChip-deleteIcon': { color: '#2e7d32' }
                            }}
                            onDelete={() => {}}
                            deleteIcon={<Close sx={{ fontSize: 16 }} />}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Client
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={formData.client}
                          onChange={(e) => handleInputChange('client', e.target.value)}
                        >
                          <MenuItem value="Kroger">Kroger</MenuItem>
                          <MenuItem value="Walmart">Walmart</MenuItem>
                          <MenuItem value="Target">Target</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Company
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        >
                          <MenuItem value="General System">General System</MenuItem>
                          <MenuItem value="Tech Corp">Tech Corp</MenuItem>
                          <MenuItem value="Innovation Inc">Innovation Inc</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Payment method
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={formData.paymentMethod}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        >
                          <MenuItem value="Bank transfer">Bank transfer</MenuItem>
                          <MenuItem value="Credit card">Credit card</MenuItem>
                          <MenuItem value="Check">Check</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Currency
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={formData.currency}
                          onChange={(e) => handleInputChange('currency', e.target.value)}
                        >
                          <MenuItem value="USD">USD</MenuItem>
                          <MenuItem value="EUR">EUR</MenuItem>
                          <MenuItem value="GBP">GBP</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Budget
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      />
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Deposit
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Deposit"
                        value={formData.deposit}
                        onChange={(e) => handleInputChange('deposit', e.target.value)}
                        sx={{ 
                          '& .MuiInputBase-input::placeholder': { 
                            color: '#9ca3af', 
                            opacity: 1 
                          } 
                        }}
                      />
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Est. revenue
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        value={formData.estRevenue}
                        onChange={(e) => handleInputChange('estRevenue', e.target.value)}
                      />
                    </div>

                    <div>
                      <Typography variant="body2" className="font-medium mb-2">
                        Est. close date
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type="date"
                        value={formData.estCloseDate}
                        onChange={(e) => handleInputChange('estCloseDate', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Error Alert */}
                  <Alert 
                    severity="error" 
                    sx={{ mt: 4, backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}
                    icon={false}
                  >
                    <Typography variant="body2" className="text-red-600">
                      Culpa nostrud in ad dolore ut occaecat Lorem veniam excepteur eiusmod et eu nisi
                    </Typography>
                  </Alert>
                </div>

                {/* PIC Section */}
                <div>
                  <Typography variant="h6" className="font-semibold mb-4">
                    PIC
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.pic.map((person, index) => (
                      <Chip
                        key={index}
                        avatar={<Avatar src={person.avatar} sx={{ width: 24, height: 24 }} />}
                        label={person.name}
                        onDelete={() => removePerson(index, 'pic')}
                        deleteIcon={<Close sx={{ fontSize: 16 }} />}
                        sx={{ 
                          backgroundColor: '#f3f4f6',
                          '& .MuiChip-deleteIcon': { color: '#6b7280' }
                        }}
                      />
                    ))}
                  </div>
                  <Button
                    startIcon={<Add />}
                    variant="text"
                    size="small"
                    sx={{ color: '#2563eb', textTransform: 'none' }}
                  >
                    Add person
                  </Button>
                </div>

                {/* Supervisor Section */}
                <div>
                  <Typography variant="h6" className="font-semibold mb-4">
                    Supervisor
                  </Typography>
                  <Button
                    startIcon={<Add />}
                    variant="text"
                    size="small"
                    sx={{ color: '#2563eb', textTransform: 'none' }}
                  >
                    Add person
                  </Button>
                </div>
              </div>
            )}

            {/* Task List Tab */}
            {activeTab === 1 && (
              <div className="text-center py-12">
                <Typography variant="h6" className="text-gray-500 mb-2">
                  Task List
                </Typography>
                <Typography variant="body1" className="text-gray-400">
                  Task list content would go here
                </Typography>
              </div>
            )}

            {/* Related Tab */}
            {activeTab === 2 && (
              <div className="text-center py-12">
                <Typography variant="h6" className="text-gray-500 mb-2">
                  Related
                </Typography>
                <Typography variant="body1" className="text-gray-400">
                  Related content would go here
                </Typography>
              </div>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateLeadPage;