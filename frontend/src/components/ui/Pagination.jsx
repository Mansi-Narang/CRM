import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ 
  count, 
  page, 
  onChange, 
  className = '',
  size = 'medium',
  ...props 
}) => {
  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={onChange}
      size={size}
      className={className}
      sx={{
        '& .MuiPaginationItem-root': {
          borderRadius: 1.5,
          '&.Mui-selected': {
            backgroundColor: '#2563eb',
            color: 'white',
            '&:hover': {
              backgroundColor: '#1d4ed8',
            },
          },
        },
      }}
      {...props}
    />
  );
};

export default Pagination;