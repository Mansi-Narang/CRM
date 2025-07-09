import { Tabs as MuiTabs, Tab as MuiTab, Box } from '@mui/material';

const Tabs = ({ 
  value, 
  onChange, 
  children, 
  className = '',
  variant = 'standard',
  ...props 
}) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <MuiTabs
        value={value}
        onChange={onChange}
        variant={variant}
        className={className}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.875rem',
            minHeight: 48,
            color: '#6b7280',
            '&.Mui-selected': {
              color: '#2563eb',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#2563eb',
          },
        }}
        {...props}
      >
        {children}
      </MuiTabs>
    </Box>
  );
};

const Tab = ({ label, ...props }) => {
  return (
    <MuiTab
      label={label}
      {...props}
    />
  );
};

Tabs.Tab = Tab;

export default Tabs;