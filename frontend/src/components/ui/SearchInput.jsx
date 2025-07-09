import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = ({ 
  placeholder = "Search...", 
  value, 
  onChange, 
  className = '',
  ...props 
}) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size="small"
      className={className}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search className="w-4 h-4 text-gray-400" />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          backgroundColor: '#f8fafc',
          '& fieldset': {
            borderColor: '#e2e8f0',
          },
          '&:hover fieldset': {
            borderColor: '#cbd5e1',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#2563eb',
          },
        },
      }}
      {...props}
    />
  );
};

export default SearchInput;