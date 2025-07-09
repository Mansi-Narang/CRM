import { 
  Table as MuiTable, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Table = ({ children, className = '', ...props }) => {
  return (
    <TableContainer component={Paper} elevation={0} className={className}>
      <MuiTable
        sx={{
          '& .MuiTableCell-root': {
            borderBottom: '1px solid #f1f5f9',
            padding: '16px',
          },
          '& .MuiTableHead-root .MuiTableCell-root': {
            backgroundColor: '#f8fafc',
            fontWeight: 600,
            color: '#374151',
            fontSize: '0.875rem',
          },
          '& .MuiTableBody-root .MuiTableRow-root:hover': {
            backgroundColor: '#f8fafc',
          },
        }}
        {...props}
      >
        {children}
      </MuiTable>
    </TableContainer>
  );
};

const TableHeader = ({ children, ...props }) => {
  return (
    <TableHead {...props}>
      {children}
    </TableHead>
  );
};

const TableContent = ({ children, ...props }) => {
  return (
    <TableBody {...props}>
      {children}
    </TableBody>
  );
};

const TableHeaderCell = ({ children, className = '', ...props }) => {
  return (
    <TableCell className={className} {...props}>
      {children}
    </TableCell>
  );
};

const TableDataCell = ({ children, className = '', ...props }) => {
  return (
    <TableCell className={className} {...props}>
      {children}
    </TableCell>
  );
};

const TableRowComponent = ({ children, className = '', ...props }) => {
  return (
    <TableRow className={className} {...props}>
      {children}
    </TableRow>
  );
};

const ActionButton = ({ onClick, ...props }) => {
  return (
    <IconButton 
      size="small" 
      onClick={onClick}
      sx={{ 
        color: '#6b7280',
        '&:hover': {
          backgroundColor: '#f3f4f6',
        }
      }}
      {...props}
    >
      <MoreVert fontSize="small" />
    </IconButton>
  );
};

Table.Header = TableHeader;
Table.Body = TableContent;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableDataCell;
Table.Row = TableRowComponent;
Table.ActionButton = ActionButton;

export default Table;