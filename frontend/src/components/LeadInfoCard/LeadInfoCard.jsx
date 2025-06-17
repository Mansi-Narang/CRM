import React from "react";
import { Box, Typography } from '@mui/material';

function LeadInfoCard() {
    const leadData = {
        title: 'Sint proident adipisicing',
        estimatedRevenue: '$2,000',
        product: '100 licenses',
        estimatedCloseDate: 'Oct 10, 2022',
    };

    return(
        <Box 
            sx={{
            backgroundColor: '#fef7f9', 
            borderRadius: '8px',     
            padding: '16px 24px',    
            display: 'flex',           
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0, 0, 0, 0.05',
            width: "99%",    
            }}>
            <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>TITLE</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'normal', color: 'text.primary' }}>{leadData.title}</Typography>
            </Box>

            <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                EST. REVENUE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'normal', color: 'text.primary' }}>
                {leadData.estimatedRevenue}
                </Typography>
            </Box>

            <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                PRODUCT
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'normal', color: 'text.primary' }}>
                {leadData.product}
                </Typography>
            </Box>

             <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                EST. CLOSE DATE
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'normal', color: 'text.primary' }}>
                {leadData.estimatedCloseDate}
                </Typography>
             </Box>
        </Box>
    );
}

export default LeadInfoCard;