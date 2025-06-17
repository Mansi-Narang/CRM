import { Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { Add, Search, FilterList, ViewModule } from '@mui/icons-material';

const LeadsHeader = ({ onAddLead, searchTerm, onSearchChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Typography variant="h4" className="font-bold text-gray-900">
                        Leads
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                        Total leads: <span className="font-semibold text-gray-900">25</span>
                    </Typography>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <TextField
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search className="w-4 h-4 text-gray-400" />
                                </InputAdornment>
                            ),
                        }}
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
                            startIcon={<Add />}
                            onClick={onAddLead}
                            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
                            style={{ backgroundColor: '#2563eb' }}
                        >
                            New
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadsHeader;